export const NavItem = ({
  label,
  isScrolled = false,
  scrollToSection,
  isResponsiveMenuOpen,
}) => {
  return (
    <button
      onClick={() => scrollToSection(label.toLowerCase())}
      className={`transition-all duration-150 cursor-pointer hover:scale-105 relative group text-xl font-medium ${
        !isScrolled ? 'hover:text-white' : 'hover:text-pink-300'
      }`}
    >
      {label}
      {!isResponsiveMenuOpen && (
        <span className='absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-violet-200 to-pink-300 transition-all duration-300 group-hover:w-full'></span>
      )}
    </button>
  )
}
