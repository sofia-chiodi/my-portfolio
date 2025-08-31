import { Code } from 'lucide-react'

export const Home = () => {
  return (
    <>
      <section
        id="home"
        className="min-h-screen flex items-center relative overflow-hidden bg-[url('/images/Background.jpeg')] bg-no-repeat bg-cover"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="lg:grid lg:grid-cols-2 lg:gap-35 items-center">
            <div className="mb-12 lg:mb-0">
              <div className="inline-flex items-center px-4 py-2 bg-white/30 backdrop-blur-sm rounded-full border border-white/15 mb-6">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
                <span className="text-white text-lg font-large">
                  Hello! Sofía here.
                </span>
              </div>
              <h1 className="text-5xl md:text-7xl font-black text-white mb-4 leading-tight">
                I'm a{' '}
                <span className="block text-transparent animate-pulse bg-clip-text bg-gradient-to-r from-violet-200  to-pink-300 drop-shadow-[0_0_6px_rgba(236,72,153,0.5)]">
                  developer
                </span>
              </h1>
              <p className="text-lg text-white leading-relaxed max-w-lg">
                Specialized in front-end technologies.
              </p>
            </div>
            <button className="group bg-gradient-to-r from-violet-300 to-pink-300 hover:to-pink-400 text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-200 flex items-center justify-center gap-2 shadow-2xl hover:shadow-pink-900/30 hover:scale-105 hover:text-fuchsia-50">
              <Code />
              <a href="#projects">My projects</a>
            </button>
          </div>
        </div>
      </section>
    </>
  )
}
