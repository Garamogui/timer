import { Scroll, Timer } from 'phosphor-react'
import { NavLink, useLocation } from 'react-router-dom'
import Logo from '../assets/Logo.svg'

export function Header() {
  const location = useLocation()

  return (
    <header className="flex items-center justify-between">
      <img src={Logo} alt="" />
      <nav className="flex gap-2">
        <NavLink
          to="/"
          title="Timer"
          className={`size-12 flex justify-center items-center text-grey-100 border-y-[3px] border-transparent ${location.pathname === '/' ? 'text-green500' : ''} hover:border-b-green500 duration-150 active:text-green500`}
        >
          <Timer size={24} />
        </NavLink>
        <NavLink
          to="/history"
          title="Histórico"
          className={`size-12 flex justify-center items-center text-grey-100 border-y-[3px] border-transparent ${location.pathname === '/history' ? 'text-green500' : ''} hover:border-b-green500 duration-150 active:text-green500`}
        >
          <Scroll size={24} />
        </NavLink>
      </nav>
    </header>
  )
}
