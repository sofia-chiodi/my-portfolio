import { Header } from '@/components/Header/Header.jsx'
import { Home } from '@/sections/Home/Home.jsx'
import { About } from '@/sections/About/About.jsx'
import { Portfolio } from '@/sections/Portfolio/Portfolio.jsx'
import { Contact } from '@/sections/Contact/Contact.jsx'
import { Skills } from '@/sections/Skills/Skills.jsx'
import { Footer } from '@/components/Footer/Footer.jsx'
import { ScrollToTopButton } from '@/components/ScrollToTopButton/ScrollToTopButton.jsx'
import 'leaflet/dist/leaflet.css'
import 'react-toastify/dist/ReactToastify.css'
import '@/styles/toast.css'
import { Toast } from '@/components/ui/Toast'

function App() {
  return (
    <>
      <Header />
      <Home />
      <About />
      <Skills />
      <Portfolio />
      <Contact />
      <Toast />
      <Footer />
      <ScrollToTopButton />
    </>
  )
}

export default App
