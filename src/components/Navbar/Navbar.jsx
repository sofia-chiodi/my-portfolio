import menuItems from '@/components/Header/menuItems.js'
import { NavItem } from './NavItem'

export const Navbar = () => {
  return (
    <div>
      <nav className="hidden md:flex space-x-8">
        {menuItems.map((item) => (
          <NavItem key={item.label} label={item.label}>
            {item.label}
          </NavItem>
        ))}
      </nav>
    </div>
  )
}
