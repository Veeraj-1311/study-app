import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { auth, db, firebaseConfigured, readCloudBackup, writeCloudBackup } from '../services/firebase.js'
import { backupSignature, createBackup, hasBackupData, restoreBackup } from '../utils/backup.js'
import { AuthContext } from './auth-context.js'

function userProfile(user) {
  if (!user) return null
  return {
    uid: user.uid,
    displayName: user.displayName,
    email: user.email,
    phoneNumber: user.phoneNumber,
    photoURL: user.photoURL,
    providerIds: user.providerData?.map((provider) => provider.providerId) || [],
  }
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(firebaseConfigured)
  const [syncing, setSyncing] = useState(false)
  const [syncError, setSyncError] = useState('')
  const [lastSyncedAt, setLastSyncedAt] = useState(null)
  const lastSignatureRef = useRef('')
  const userRef = useRef(null)

  const syncNow = useCallback(async (reason = 'manual') => {
    if (!firebaseConfigured || !userRef.current || !db) return false
    const backup = createBackup()
    const signature = backupSignature(backup)
    if (reason !== 'manual' && signature === lastSignatureRef.current) return true

    setSyncing(true)
    setSyncError('')
    try {
      await writeCloudBackup(userRef.current.uid, userRef.current, backup)
      lastSignatureRef.current = signature
      setLastSyncedAt(Date.now())
      return true
    } catch (error) {
      setSyncError(error?.message || 'Cloud sync failed.')
      return false
    } finally {
      setSyncing(false)
    }
  }, [])

  useEffect(() => {
    if (!firebaseConfigured || !auth) {
      return undefined
    }

    return onAuthStateChanged(auth, async (nextUser) => {
      userRef.current = nextUser
      setUser(nextUser)
      setSyncError('')

      if (!nextUser) {
        lastSignatureRef.current = ''
        setLastSyncedAt(null)
        setLoading(false)
        return
      }

      setLoading(true)
      setSyncing(true)
      try {
        const remote = await readCloudBackup(nextUser.uid)
        if (hasBackupData(remote?.backup)) {
          restoreBackup(remote.backup, { clearMissing: true })
        } else {
          await writeCloudBackup(nextUser.uid, nextUser, createBackup())
        }
        lastSignatureRef.current = backupSignature(createBackup())
        setLastSyncedAt(Date.now())
      } catch (error) {
        setSyncError(error?.message || 'Could not sync your account.')
      } finally {
        setSyncing(false)
        setLoading(false)
      }
    })
  }, [])

  useEffect(() => {
    if (!user || !firebaseConfigured) return undefined
    const intervalId = window.setInterval(() => {
      syncNow('auto')
    }, 9000)
    const syncOnHide = () => {
      if (document.visibilityState === 'hidden') syncNow('auto')
    }
    document.addEventListener('visibilitychange', syncOnHide)
    return () => {
      window.clearInterval(intervalId)
      document.removeEventListener('visibilitychange', syncOnHide)
    }
  }, [syncNow, user])

  const value = useMemo(() => ({
    configured: firebaseConfigured,
    user,
    profile: userProfile(user),
    loading,
    syncing,
    syncError,
    lastSyncedAt,
    syncNow,
  }), [lastSyncedAt, loading, syncError, syncNow, syncing, user])

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}
