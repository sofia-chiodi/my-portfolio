export const NavItem = ({ label, isScrolled = false, scrollToSection }) => {
  return (
    <button
      onClick={() => scrollToSection(label.toLowerCase())}
      className={`transition-all duration-150 hover:scale-105 relative group text-white ${
        isScrolled ? 'text-violet-400 hover:text-pink-300' : ''
      }`}
    >
      {label}
    </button>
  )
}
