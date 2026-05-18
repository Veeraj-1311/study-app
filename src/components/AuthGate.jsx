import { useState } from 'react'
import { Apple, LoaderCircle, Mail, Phone, ShieldCheck } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import { firebaseRequiredEnv, sendPhoneCode, signInWithApple, signInWithGoogle } from '../services/firebase.js'
import { useAuth } from '../hooks/useAuth.js'

function ProviderButton({ icon: Icon, children, onClick, disabled }) {
  return (
    <button type="button" className="auth-provider-button" onClick={onClick} disabled={disabled}>
      <Icon size={18} />
      <span>{children}</span>
    </button>
  )
}

export default function AuthGate({ children }) {
  const { configured, user, loading, syncing, syncError } = useAuth()
  const [phoneNumber, setPhoneNumber] = useState('')
  const [code, setCode] = useState('')
  const [confirmation, setConfirmation] = useState(null)
  const [phoneVerifier, setPhoneVerifier] = useState(null)
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState('')

  const runSignIn = async (task) => {
    setBusy(true)
    setError('')
    try {
      await task()
    } catch (signInError) {
      setError(signInError?.message || 'Sign in failed.')
    } finally {
      setBusy(false)
    }
  }

  const handlePhoneCode = async () => {
    const phone = phoneNumber.trim()
    if (!phone.startsWith('+')) {
      setError('Use international format, like +919876543210.')
      return
    }
    await runSignIn(async () => {
      phoneVerifier?.clear?.()
      const result = await sendPhoneCode(phone, 'phone-recaptcha')
      setConfirmation(result.confirmation)
      setPhoneVerifier(result.verifier)
    })
  }

  const confirmCode = async () => {
    if (!confirmation || !code.trim()) return
    await runSignIn(() => confirmation.confirm(code.trim()))
  }

  if (configured && (loading || syncing)) {
    return (
      <main className="auth-screen">
        <section className="auth-card">
          <LoaderCircle className="spin" size={28} />
          <h1>Signing you in</h1>
          <p>{syncing ? 'Syncing your LearnFlow data.' : 'Checking your account.'}</p>
        </section>
      </main>
    )
  }

  if (configured && user) return children

  return (
    <main className="auth-screen">
      <motion.section
        className="auth-card"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="auth-badge">
          <ShieldCheck size={18} />
          <span>Sign in required</span>
        </div>
        <h1>LearnFlow</h1>
        <p>Use a secure account to keep progress, notes, reports, and AI usage tied to you.</p>

        {!configured ? (
          <div className="auth-config-box">
            <strong>Firebase Auth is not configured yet.</strong>
            <span>Add these Vercel environment variables, then redeploy:</span>
            <code>{firebaseRequiredEnv.join('\n')}</code>
          </div>
        ) : (
          <>
            <div className="auth-provider-grid">
              <ProviderButton icon={Mail} onClick={() => runSignIn(signInWithGoogle)} disabled={busy}>
                Continue with Google
              </ProviderButton>
              <ProviderButton icon={Apple} onClick={() => runSignIn(signInWithApple)} disabled={busy}>
                Continue with Apple
              </ProviderButton>
            </div>

            <div className="auth-phone-box">
              <label htmlFor="phone-number">Phone number</label>
              <div className="field-shell">
                <input
                  id="phone-number"
                  className="text-input"
                  value={phoneNumber}
                  onChange={(event) => setPhoneNumber(event.target.value)}
                  placeholder="+91..."
                  autoComplete="tel"
                />
                <button type="button" className="mini-action" onClick={handlePhoneCode} disabled={busy}>
                  <Phone size={15} />
                  <span>Send</span>
                </button>
              </div>
              <AnimatePresence>
                {confirmation && (
                  <motion.div
                    className="field-shell auth-code-field"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                  >
                    <input
                      className="text-input"
                      value={code}
                      onChange={(event) => setCode(event.target.value)}
                      placeholder="SMS code"
                      inputMode="numeric"
                    />
                    <button type="button" className="mini-action" onClick={confirmCode} disabled={busy || !code.trim()}>
                      Verify
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
              <div id="phone-recaptcha" />
            </div>
          </>
        )}

        {(error || syncError) && <p className="auth-error">{error || syncError}</p>}
      </motion.section>
    </main>
  )
}
