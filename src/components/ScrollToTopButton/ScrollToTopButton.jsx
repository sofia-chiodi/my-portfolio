import { useEffect, useState } from 'react'
import { FaArrowUp } from 'react-icons/fa'

export const ScrollToTopButton = () => {
  const [showButton, setShowButton] = useState(false)
  const [isFooterVisible, setIsFooterVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      const firstSectionHeight =
        document.getElementById('home')?.offsetHeight || 600
      setShowButton(scrollY > firstSectionHeight)
    }

    window.addEventListener('scroll', handleScroll)

    const footer = document.querySelector('footer')
    if (footer) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            setIsFooterVisible(entry.isIntersecting)
          })
        },
        { threshold: 0.1 }
      )
      observer.observe(footer)

      return () => {
        window.removeEventListener('scroll', handleScroll)
        observer.disconnect()
      }
    }

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  if (!showButton) return null

  return (
    <button
      onClick={scrollToTop}
      className={`fixed right-6 z-50 bg-gradient-to-r from-violet-400/70 to-pink-400/70 
        rounded-full p-2 hover:scale-110 transition-all duration-300 text-white/80 
        border border-white/80 shadow-lg 
        ${isFooterVisible ? 'bottom-40' : 'bottom-6'}`}
    >
      <FaArrowUp
        size={20}
        className='animate-button-bounce-y hover:scale-110 transition-all duration-200'
      />
    </button>
  )
}
