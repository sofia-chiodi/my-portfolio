import menuItems from '@/components/Header/menuItems.js'
import { NavItem } from './NavItem'

export const ResponsiveNavbar = ({ isResponsiveMenuOpen, scrollToSection }) => {
  console.log('responsive', isResponsiveMenuOpen)
  return (
    <div className='md:hidden bg-white/95 backdrop-blur-lg shadow-2xl rounded-2xl mt-2 py-6 border border-purple-100'>
      {menuItems.map((item) => (
        <NavItem
          key={item.label}
          label={item.label}
          isResponsiveMenuOpen={isResponsiveMenuOpen}
          scrollToSection={scrollToSection}
        />
      ))}
    </div>
  )
}
