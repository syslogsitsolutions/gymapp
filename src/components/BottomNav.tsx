import { NavLink } from 'react-router-dom'

const navItems = [
  { to: '/home',       icon: 'home',            label: 'Home' },
  { to: '/workouts',   icon: 'fitness_center',  label: 'Workouts' },
  { to: '/membership', icon: 'card_membership', label: 'Membership' },
  { to: '/profile',    icon: 'person',          label: 'Profile' },
]

export default function BottomNav() {
  return (
    <nav className="bottom-nav" role="navigation" aria-label="Main navigation">
      {navItems.map(({ to, icon, label }) => (
        <NavLink
          key={to}
          to={to}
          className={({ isActive }) => `nav-item${isActive ? ' active' : ''}`}
          aria-label={label}
        >
          <span className="nav-item__icon material-symbols-rounded">{icon}</span>
          <span className="nav-item__label">{label}</span>
        </NavLink>
      ))}
    </nav>
  )
}
