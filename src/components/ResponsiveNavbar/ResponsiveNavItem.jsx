export const ResponsiveNavItem = ({ label, scrollToSection }) => {
  return (
    <button
      onClick={() => scrollToSection(label.toLowerCase())}
      className='w-full text-left px-6 py-3 text-violet-300 hover:bg-gradient-to-r hover:from-violet-100 hover:to-pink-200 hover:text-pink-400 rounded-md'
    >
      {label}
      <span className='absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-violet-200 to-pink-300 transition-all duration-300 group-hover:w-full '></span>
    </button>
  )
}
