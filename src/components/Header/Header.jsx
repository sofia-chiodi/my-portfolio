import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'

import { Logo } from '@/components/Logo/Logo.jsx'
import { Navbar } from '@/components/Navbar/Navbar.jsx'
import { ResponsiveNavbar } from '@/components/ResponsiveNavbar/ResponsiveNavbar.jsx'

export const Header = () => {
  const [isResponsiveMenuOpen, setIsResponsiveMenuOpen] = useState(false)

  const [isScrolled, setIsScrolled] = useState(false)

  const toggleResponsiveMenu = () => {
    setIsResponsiveMenuOpen(!isResponsiveMenuOpen)
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 text-violet-300 ${
        isScrolled
          ? 'bg-pink-100/60 backdrop-blur-lg shadow-xl'
          : 'bg-transparent'
      }`}
    >
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center py-4'>
          <Logo isScrolled={isScrolled} />
          <Navbar
            isScrolled={isScrolled}
            scrollToSection={scrollToSection}
            isResponsiveMenuOpen={isResponsiveMenuOpen}
          />

          {/* Responsive Menu Button */}
          <button
            className={`md:hidden p-2 rounded-lg transition-all duration-300`}
            onClick={toggleResponsiveMenu}
          >
            {isResponsiveMenuOpen ? (
              <X size={30} strokeWidth={2.3} />
            ) : (
              <Menu size={30} strokeWidth={2.3} />
            )}
          </button>
        </div>

        {/* Responsive Navbar */}
        {isResponsiveMenuOpen && (
          <ResponsiveNavbar
            isScrolled={isScrolled}
            isResponsiveMenuOpen={isResponsiveMenuOpen}
            scrollToSection={scrollToSection}
          />
        )}
      </div>
    </header>
  )
}
