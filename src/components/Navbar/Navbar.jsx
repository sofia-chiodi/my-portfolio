import menuItems from '@/components/Header/menuItems.js'
import { NavItem } from './NavItem'

export const Navbar = ({ isResponsiveMenuOpen }) => {
  return (
    <div>
      <nav className="hidden md:flex space-x-8">
        {menuItems.map((item) => (
          <NavItem
            key={item.label}
            label={item.label}
            isResponsiveMenuOpen={isResponsiveMenuOpen}
          >
            {item.label}
          </NavItem>
        ))}
      </nav>
    </div>
  )
}
