import { useState, type FormEvent, type CSSProperties } from 'react'

export type FirebaseLeadConfig = {
  apiKey: string
  authDomain: string
  projectId: string
}

export type LeadFormProps = {
  siteId: string
  collection?: string
  firebaseConfig?: FirebaseLeadConfig
  supportApiUrl?: string
  submitLabel?: string
  successMessage?: string
  className?: string
  inputStyle?: CSSProperties
  buttonStyle?: CSSProperties
}

type Status = 'idle' | 'submitting' | 'success' | 'error' | 'stub'

const persistLead = async (args: {
  siteId: string
  collection: string
  email: string
  name: string
  message: string
  supportApiUrl?: string
  firebaseConfig?: FirebaseLeadConfig
}): Promise<'success' | 'stub'> => {
  if (args.supportApiUrl) {
    const response = await fetch(args.supportApiUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        siteId: args.siteId,
        email: args.email,
        name: args.name,
        message: args.message,
      }),
    })
    if (!response.ok) {
      throw new Error('Message was not sent')
    }
  }
  if (!args.firebaseConfig?.projectId) {
    console.info('[lead-form] stub submit (no Firebase config)', {
      siteId: args.siteId,
      email: args.email,
      name: args.name,
    })
    return 'stub'
  }

  const { initializeApp, getApps } = await import('firebase/app')
  const { getFirestore, collection, addDoc, serverTimestamp } = await import('firebase/firestore')

  const app = getApps().length ? getApps()[0]! : initializeApp(args.firebaseConfig)
  const db = getFirestore(app)
  await addDoc(collection(db, args.collection), {
    siteId: args.siteId,
    email: args.email,
    name: args.name,
    createdAt: serverTimestamp(),
  })
  return 'success'
}

export const LeadForm = ({
  siteId,
  collection = 'leads',
  firebaseConfig,
  supportApiUrl,
  submitLabel = 'Join waitlist',
  successMessage = 'Thanks — we will be in touch.',
  className,
  inputStyle,
  buttonStyle,
}: LeadFormProps) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState<Status>('idle')
  const [error, setError] = useState<string | null>(null)

  const onSubmit = async (event: FormEvent) => {
    event.preventDefault()
    setStatus('submitting')
    setError(null)
    try {
      const result = await persistLead({ siteId, collection, email, name, message, supportApiUrl, firebaseConfig })
      setStatus(result === 'stub' ? 'stub' : 'success')
      setName('')
      setEmail('')
      setMessage('')
    } catch (err) {
      setStatus('error')
      setError(err instanceof Error ? err.message : 'Something went wrong')
    }
  }

  if (status === 'success' || status === 'stub') {
    return (
      <p role="status" className={className}>
        {successMessage}
        {status === 'stub' ? ' (dev mode — Firebase not configured)' : ''}
      </p>
    )
  }

  return (
    <form className={className} onSubmit={onSubmit} noValidate>
      <label>
        <span>Name</span>
        <input
          name="name"
          type="text"
          autoComplete="name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={inputStyle}
        />
      </label>
      <label>
        <span>Email</span>
        <input
          name="email"
          type="email"
          autoComplete="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={inputStyle}
        />
      </label>
      {supportApiUrl ? (
        <label>
          <span>Message</span>
          <textarea
            name="message"
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            style={inputStyle}
          />
        </label>
      ) : null}
      <button type="submit" disabled={status === 'submitting'} style={buttonStyle}>
        {status === 'submitting' ? 'Sending…' : submitLabel}
      </button>
      {error ? <p role="alert">{error}</p> : null}
    </form>
  )
}
