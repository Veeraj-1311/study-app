import { initializeApp } from 'firebase/app'
import {
  browserLocalPersistence,
  getAuth,
  GoogleAuthProvider,
  OAuthProvider,
  RecaptchaVerifier,
  setPersistence,
  signInWithPhoneNumber,
  signInWithPopup,
  signOut,
} from 'firebase/auth'
import {
  doc,
  getDoc,
  getFirestore,
  serverTimestamp,
  setDoc,
} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
}

export const firebaseRequiredEnv = [
  'VITE_FIREBASE_API_KEY',
  'VITE_FIREBASE_AUTH_DOMAIN',
  'VITE_FIREBASE_PROJECT_ID',
  'VITE_FIREBASE_APP_ID',
]

export const firebaseConfigured = firebaseRequiredEnv.every((key) => Boolean(import.meta.env[key]))

const app = firebaseConfigured ? initializeApp(firebaseConfig) : null

export const auth = app ? getAuth(app) : null
export const db = app ? getFirestore(app) : null

if (auth) {
  setPersistence(auth, browserLocalPersistence).catch(() => {})
}

export async function signInWithGoogle() {
  const provider = new GoogleAuthProvider()
  provider.setCustomParameters({ prompt: 'select_account' })
  return signInWithPopup(auth, provider)
}

export async function signInWithApple() {
  const provider = new OAuthProvider('apple.com')
  provider.addScope('email')
  provider.addScope('name')
  return signInWithPopup(auth, provider)
}

export async function sendPhoneCode(phoneNumber, containerId) {
  const verifier = new RecaptchaVerifier(auth, containerId, { size: 'invisible' })
  const confirmation = await signInWithPhoneNumber(auth, phoneNumber, verifier)
  return { confirmation, verifier }
}

export async function logOut() {
  if (auth) await signOut(auth)
}

export function cloudBackupRef(uid) {
  return doc(db, 'learnflowUsers', uid)
}

export async function readCloudBackup(uid) {
  const snap = await getDoc(cloudBackupRef(uid))
  return snap.exists() ? snap.data() : null
}

export async function writeCloudBackup(uid, user, backup) {
  await setDoc(cloudBackupRef(uid), {
    backup,
    displayName: user.displayName || null,
    email: user.email || null,
    phoneNumber: user.phoneNumber || null,
    providerIds: user.providerData?.map((provider) => provider.providerId) || [],
    updatedAt: serverTimestamp(),
  }, { merge: true })
}
