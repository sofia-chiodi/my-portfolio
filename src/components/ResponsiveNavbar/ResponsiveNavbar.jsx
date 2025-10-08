import menuItems from '@/utils/menuItems.js'
import { ResponsiveNavItem } from './ResponsiveNavItem'

export const ResponsiveNavbar = ({
  isResponsiveMenuOpen,
  scrollToSection,
  isScrolled,
}) => {
  return (
    <div
      className={`animate-fade-in-delay md:hidden w-full ${
        isResponsiveMenuOpen
          ? 'bg-white/70 backdrop-blur-md shadow-xl rounded-xl mt-2 py-6 flex flex-col items-start space-y-2 px-4'
          : ''
      }`}
    >
      {menuItems.map((item) => (
        <ResponsiveNavItem
          key={item.label}
          label={item.label}
          isScrolled={isScrolled}
          isResponsiveMenuOpen={isResponsiveMenuOpen}
          scrollToSection={scrollToSection}
          className='text-pink-300'
        />
      ))}
    </div>
  )
}
