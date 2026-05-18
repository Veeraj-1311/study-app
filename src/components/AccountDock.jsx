import { Cloud, LogOut, RefreshCw, UserRound } from 'lucide-react'
import { logOut } from '../services/firebase.js'
import { useAuth } from '../hooks/useAuth.js'

function accountLabel(profile) {
  return profile?.displayName || profile?.email || profile?.phoneNumber || 'Account'
}

export default function AccountDock() {
  const { profile, syncing, syncError, lastSyncedAt, syncNow } = useAuth()
  if (!profile) return null

  const syncedText = lastSyncedAt
    ? `Synced ${new Date(lastSyncedAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`
    : 'Sync pending'

  return (
    <aside className="account-dock" aria-label="Account and sync">
      <div className="account-id">
        {profile.photoURL ? <img src={profile.photoURL} alt="" /> : <UserRound size={17} />}
        <span>{accountLabel(profile)}</span>
      </div>
      <div className="account-sync" data-error={Boolean(syncError)}>
        <Cloud size={15} />
        <span>{syncError || (syncing ? 'Syncing...' : syncedText)}</span>
      </div>
      <button type="button" className="account-icon-button" onClick={() => syncNow('manual')} disabled={syncing} aria-label="Sync now" title="Sync now">
        <RefreshCw size={15} />
      </button>
      <button type="button" className="account-icon-button" onClick={logOut} aria-label="Sign out" title="Sign out">
        <LogOut size={15} />
      </button>
    </aside>
  )
}
