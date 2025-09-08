import menuItems from '@/components/Header/menuItems.js'
import { NavItem } from './NavItem'

export const Navbar = ({ isScrolled, scrollToSection }) => {
  return (
    <div>
      <nav className='hidden md:flex space-x-8 text-white'>
        {menuItems.map((item) => (
          <NavItem
            key={item.label}
            label={item.label}
            isScrolled={isScrolled}
            scrollToSection={scrollToSection}
          >
            {item.label}
          </NavItem>
        ))}
      </nav>
    </div>
  )
}
