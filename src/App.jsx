import { Header } from '@/components/Header/Header.jsx'
import { Home } from '@/sections/Home/Home.jsx'
import { About } from '@/sections/About/About.jsx'
import { Projects } from '@/sections/Projects/Projects.jsx'
import { Portfolio } from '@/sections/Portfolio/Portfolio.jsx'

function App() {
  return (
    <>
      <Header />
      <Home />
      <About />
      <Projects />
      <Portfolio />
    </>
  )
}

export default App
