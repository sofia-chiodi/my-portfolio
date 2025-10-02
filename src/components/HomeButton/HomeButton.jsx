export const HomeButton = ({ children, className, ...props }) => {
  return (
    <button
      {...props}
      className={`group px-8 py-4 rounded-2xl text-white font-semibold transition-all duration-200 flex items-center justify-center shadow-xl hover:scale-105 cursor-pointer ${className}`}
    >
      {children}
    </button>
  )
}
