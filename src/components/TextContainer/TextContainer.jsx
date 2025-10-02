export const TextContainer = ({ children, className }) => {
  return (
    <div
      className={`relative bg-white/10 backdrop:blur-xl rounded-3xl border border-white/20 shadow-xl mb-8 p-6 ${className}`}
    >
      {children}
    </div>
  )
}
