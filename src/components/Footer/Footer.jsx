import { Sparkles } from 'lucide-react'
import { FaArrowUp } from 'react-icons/fa'

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
  return (
    <footer className='text-center py-6 bg-gradient-to-br from-violet-300 to-pink-300 text-white flex flex-col justify-center items-center'>
      <div className='flex items-center space-x-2 mb-4'>
        <Sparkles className='w-8 h-8 text-violet-400' />
        <h3 className='text-2xl font-bold bg-gradient-to-r from-violet-400 to-pink-400 bg-clip-text text-transparent'>
          Sofía Chiodi
        </h3>
      </div>
      <div className=''>
        <p> Copyright &copy; {new Date().getFullYear()} All rights reserved.</p>
      </div>
      <button
        className='fixed bottom-6 right-6 bg-gradient-to-r from-violet-400/70 to-pink-400/70 rounded-full p-1 hover:scale-110 transition-all duration-300 text-white/80 border border-white/80'
        onClick={scrollToTop}
      >
        <FaArrowUp size={20} />
      </button>
    </footer>
  )
}
