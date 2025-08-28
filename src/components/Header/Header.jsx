import { Logo } from '@/components/Logo/Logo.jsx'
import { Navbar } from '@/components/Navbar/Navbar.jsx'

export const Header = () => {
  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Logo />
          <Navbar />
        </div>
      </div>
    </header>
  )
}
