import { Sparkles } from 'lucide-react'

export const Footer = () => {
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
    </footer>
  )
}
