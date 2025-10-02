export const SectionTitle = ({ children }) => {
  return (
    <div className='inline-flex px-8 py-4 bg-gradient-to-r from-pink-200 to-purple-200 text-4xl rounded-full mb-16 font-bold shadow-xl shadow-pink-900/10'>
      <span className='animate-pulse text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-violet-300'>
        <h2>{children}</h2>
      </span>
    </div>
  )
}
