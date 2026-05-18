import { Link, useLocation } from 'react-router-dom'
import { BarChart3, Home, RotateCcw, Search } from 'lucide-react'
import AskAI from './AskAI.jsx'

function focusSearchInput() {
  const delays = [60, 180, 360]
  delays.forEach((delay) => {
    window.setTimeout(() => {
      const input = document.querySelector('[aria-label="Search study content"]')
      input?.focus()
      input?.scrollIntoView({ block: 'center', behavior: 'smooth' })
    }, delay)
  })
}

function MobileLink({ to, icon: Icon, label, active, onClick }) {
  return (
    <Link to={to} className="mobile-nav-item" data-active={active} onClick={onClick}>
      <Icon size={18} />
      <span>{label}</span>
    </Link>
  )
}

export default function MobileNav() {
  const location = useLocation()
  const isHome = location.pathname === '/'
  const isSearch = isHome && new URLSearchParams(location.search).get('search') === '1'

  return (
    <nav className="mobile-bottom-nav" aria-label="Mobile shortcuts">
      <MobileLink to="/" icon={Home} label="Home" active={isHome && !isSearch} />
      <MobileLink to="/?search=1" icon={Search} label="Search" active={isSearch} onClick={focusSearchInput} />
      <MobileLink to="/review" icon={RotateCcw} label="Review" active={location.pathname === '/review'} />
      <AskAI inline label="Ask" triggerClassName="mobile-nav-item mobile-nav-button" />
      <MobileLink to="/stats" icon={BarChart3} label="Stats" active={location.pathname === '/stats'} />
    </nav>
  )
}
