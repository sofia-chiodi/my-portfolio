import { Sparkles } from 'lucide-react'

export const Logo = ({ isScrolled }) => {
  return (
    <div
      className={`flex items-center space-x-2 ${
        !isScrolled
          ? 'group hover:drop-shadow-[0_0_6px_rgba(236,72,153,0.6)] group hover:text-white'
          : ''
      }`}
    >
      <div className='relative'>
        <Sparkles
          strokeWidth={2.1}
          className={'w-8 h-8 transition-all duration-300'}
        />
      </div>

      <h1
        className={
          'text-2xl font-medium bg-gradient-to-r from-violet-200 to-pink-300 bg-clip-text transition-all duration-300'
        }
      >
        Sofía Chiodi
      </h1>
    </div>
  )
}
