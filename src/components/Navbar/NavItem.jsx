export const NavItem = ({
  label,
  isResponsiveMenuOpen,
  isScrolled,
  scrollToSection,
}) => {
  console.log('navitem', isResponsiveMenuOpen)
  return (
    <button
      onClick={() => scrollToSection(label.toLowerCase())}
      className={`${
        isResponsiveMenuOpen
          ? 'block w-full text-left px-6 py-3 text-gray-600 hover:bg-gradient-to-r hover:from-violet-100 hover:to-pink-200 hover:text-violet-400'
          : 'capitalize font-medium transition-all duration-300 hover:scale-105 relative group'
      } capitalize font-medium transition-all duration-150 ${
        isScrolled
          ? 'text-gray-700 hover:text-violet-200'
          : 'text-white hover:text-pink-200'
      }`}
    >
      {label}
      {!isResponsiveMenuOpen && (
        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-violet-200 to-pink-300 transition-all duration-300 group-hover:w-full "></span>
      )}
    </button>
  )
}
