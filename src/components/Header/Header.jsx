import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'

import { Logo } from '@/components/Logo/Logo.jsx'
import { Navbar } from '@/components/Navbar/Navbar.jsx'
import { ResponsiveNavbar } from '@/components/Navbar/ResponsiveNavbar.jsx'

export const Header = () => {
  const [isResponsiveMenuOpen, setIsResponsiveMenuOpen] = useState(false)

  const [isScrolled, setIsScrolled] = useState(false)

  const toggleResponsiveMenu = () => {
    setIsResponsiveMenuOpen((prev) => !prev)
  }

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30)
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
      setIsResponsiveMenuOpen(false)
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-lg shadow-xl border-b border-violet-100'
          : 'bg-transparent'
      }`}
    >
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center py-4'>
          <Logo isScrolled={isScrolled} />
          <Navbar
            isResponsiveMenuOpen={isResponsiveMenuOpen}
            isScrolled={isScrolled}
            scrollToSection={scrollToSection}
          />

          {/* Responsive Menu Button */}
          <button
            className={`md:hidden p-2 rounded-lg transition-all duration-300`}
            onClick={toggleResponsiveMenu}
          >
            {isResponsiveMenuOpen ? (
              <X size={24} strokeWidth={2.1} />
            ) : (
              <Menu size={24} strokeWidth={2.1} />
            )}
          </button>
        </div>

        {/* Responsive Navbar */}
        {isResponsiveMenuOpen && (
          <ResponsiveNavbar
            isResponsiveMenuOpen={isResponsiveMenuOpen}
            isScrolled={isScrolled}
            scrollToSection={scrollToSection}
          />
        )}
      </div>
    </header>
  )
}
