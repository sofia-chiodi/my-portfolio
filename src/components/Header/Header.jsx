import { X } from 'lucide-react'
import { Logo } from '@/components/Logo/Logo.jsx'
import menuItems from '@/components/Header/menuItems.js'

export const Header = () => {
  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Desktop */}
          <Logo />
          <nav className="hidden md:flex space-x-8">
            {menuItems.map((item) => (
              <button
                key={item.label}
                className={`capitalize font-medium transition-all duration-300 hover:scale-105 relative group`}
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-violet-200 to-pink-300 transition-all duration-300 group-hover:w-full "></span>
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden p-2 rounded-lg transition-all duration-300`}
          >
            <X size={24} strokeWidth={2.1} />
          </button>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden bg-white/95 backdrop-blur-lg shadow-2xl rounded-2xl mt-2 py-6 border border-purple-100">
          {menuItems.map((item) => {
            return (
              <button className="block w-full text-left px-6 py-3 text-gray-600 hover:bg-gradient-to-r hover:from-violet-100 hover:to-pink-200 hover:text-violet-400 capitalize font-medium transition-all duration-150">
                {item.label}
              </button>
            )
          })}
        </div>
      </div>
    </header>
  )
}
