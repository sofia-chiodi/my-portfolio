import { Header } from '@/components/Header/Header.jsx'
import { Home } from '@/sections/Home/Home.jsx'
import { About } from '@/sections/About/About.jsx'
import { Portfolio } from '@/sections/Portfolio/Portfolio.jsx'
import { Contact } from '@/sections/Contact/Contact.jsx'
import { Footer } from '@/components/Footer/Footer.jsx'
import 'react-toastify/dist/ReactToastify.css'
import '@/styles/toast.css'
import { Toast } from '@/components/ui/Toast'

function App() {
  return (
    <>
      <Header />
      <Home />
      <About />
      <Portfolio />
      <Contact />
      <Toast />
      <Footer />
    </>
  )
}

export default App
