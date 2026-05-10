import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { sidebarNav, type NavSection } from '../lib/navData'

function NavSectionComponent({ section, defaultOpen }: { section: NavSection; defaultOpen: boolean }) {
  const [open, setOpen] = useState(defaultOpen)

  return (
    <div className="mb-2">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-3 py-2 text-xs font-bold text-white/50 hover:text-white tracking-wider uppercase transition-colors"
      >
        {section.title}
        <svg
          className={`w-3 h-3 transition-transform ${open ? 'rotate-90' : ''}`}
          fill="none" stroke="currentColor" viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
      {open && (
        <ul className="mt-1 space-y-0.5">
          {section.items.map(item => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `block px-3 py-1.5 text-sm rounded transition-colors ${
                    isActive
                      ? 'bg-accent/10 text-accent font-bold'
                      : 'text-white/60 hover:text-white hover:bg-white/5'
                  }`
                }
              >
                {item.title}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default function Sidebar() {
  return (
    <aside className="w-64 shrink-0 border-r border-white/10 overflow-y-auto h-[calc(100vh-3.5rem)] sticky top-14 py-6 px-2 hidden lg:block">
      <nav>
        {sidebarNav.map((section, i) => (
          <NavSectionComponent key={section.title} section={section} defaultOpen={i === 0} />
        ))}
      </nav>
    </aside>
  )
}
