import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

export function AppNav({ backTo, backLabel = 'Back', actions = null }) {
  return (
    <nav className="app-nav" aria-label="Primary">
      <div className="app-nav-left">
        {backTo ? (
          <Link to={backTo} className="nav-back">
            <ArrowLeft size={16} />
            <span>{backLabel}</span>
          </Link>
        ) : (
          <Link to="/" className="brand-mark" aria-label="LearnFlow home">
            <span className="brand-icon">L</span>
            <span>LearnFlow</span>
          </Link>
        )}
      </div>
      {actions && <div className="app-nav-actions">{actions}</div>}
    </nav>
  )
}

export function PageShell({ children, size = 'wide', className = '' }) {
  return (
    <main className={`page-shell ${className}`}>
      <div className={`page-container page-container-${size}`}>
        {children}
      </div>
    </main>
  )
}

export function PageHeader({ icon: Icon, eyebrow, title, description, actions = null, children = null }) {
  return (
    <header className="page-header">
      <div className="page-header-copy">
        {eyebrow && (
          <div className="eyebrow">
            {Icon && <Icon size={15} />}
            <span>{eyebrow}</span>
          </div>
        )}
        <h1>{title}</h1>
        {description && <p>{description}</p>}
        {children}
      </div>
      {actions && <div className="page-header-actions">{actions}</div>}
    </header>
  )
}

export function Card({ as: Tag = 'div', className = '', interactive = false, children, ...props }) {
  return (
    <Tag className={`card ${interactive ? 'card-interactive' : ''} ${className}`} {...props}>
      {children}
    </Tag>
  )
}

export function Button({ to, href, variant = 'primary', size = 'md', icon: Icon, className = '', children, ...props }) {
  const content = (
    <>
      {Icon && <Icon size={size === 'sm' ? 14 : 16} />}
      <span>{children}</span>
    </>
  )
  const classes = `button button-${variant} button-${size} ${className}`
  if (to) return <Link to={to} className={classes} {...props}>{content}</Link>
  if (href) return <a href={href} className={classes} {...props}>{content}</a>
  return <button className={classes} {...props}>{content}</button>
}

export function IconButton({ label, icon: Icon, className = '', type = 'button', ...props }) {
  return (
    <button type={type} className={`icon-button ${className}`} aria-label={label} title={label} {...props}>
      <Icon size={17} />
    </button>
  )
}

export function ProgressBar({ value = 0, color = 'var(--color-accent)', label }) {
  const safeValue = Math.max(0, Math.min(100, Number(value) || 0))
  return (
    <div className="progress-wrap" aria-label={label}>
      <div className="progress-track">
        <div className="progress-fill" style={{ width: `${safeValue}%`, backgroundColor: color }} />
      </div>
      {label && <span>{label}</span>}
    </div>
  )
}

export function EmptyState({ icon: Icon, title, description, action = null }) {
  return (
    <div className="empty-state">
      {Icon && (
        <div className="empty-icon">
          <Icon size={22} />
        </div>
      )}
      <h2>{title}</h2>
      {description && <p>{description}</p>}
      {action && <div className="empty-action">{action}</div>}
    </div>
  )
}

export function Metric({ label, value, icon: Icon, color = 'var(--color-accent)', to }) {
  const Tag = to ? Link : 'div'
  const props = to ? { to } : {}
  return (
    <Tag className={`metric ${to ? 'metric-link' : ''}`} {...props}>
      <div className="metric-label">
        {Icon && <Icon size={15} style={{ color }} />}
        <span>{label}</span>
      </div>
      <strong>{value}</strong>
    </Tag>
  )
}
