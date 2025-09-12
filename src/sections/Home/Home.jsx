import { Code, Mail } from 'lucide-react'

export const Home = () => {
  return (
    <>
      <section
        id='home'
        className='min-h-screen py-30 flex items-center relative  overflow-hidden bg-[url("/images/Background.jpeg")] bg-no-repeat bg-cover'
      >
        <div className='max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-10'>
          <div className='md:grid md:grid-cols-2 md:gap-20 lg:gap-35 items-center'>
            <div className='mb-12 lg:mb-0'>
              <div className='inline-flex items-center px-4 py-2 bg-black/5 backdrop-blur-sm rounded-full border border-white/15 mb-6'>
                <span className='w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse'></span>
                <span className='text-white text-lg font-large'>
                  Hello! Sofía here.
                </span>
              </div>
              <h1 className='text-5xl md:text-6xl lg:text-7xl font-black text-white mb-4 leading-tight'>
                Software{' '}
                <span className='block text-transparent animate-pulse bg-clip-text bg-gradient-to-r from-violet-200 to-pink-300 drop-shadow-[0_0_6px_rgba(236,72,153,0.6)]'>
                  developer
                </span>
              </h1>
              <p className='text-lg text-white mb-8 leading-relaxed max-w-lg animate-fade-in-delay-3'>
                Specialized in{' '}
                <span className='text-pink-400/60 font-semibold'>
                  front-end{' '}
                </span>
                technologies
              </p>

              <div className='flex flex-col md:flex-row gap-4 mb-10'>
                <button className='group bg-gradient-to-r from-violet-300 to-pink-300 hover:to-pink-400 text-white sm:px-4 md:px-6 lg:px-8 py-4 rounded-2xl font-semibold transition-all duration-200 flex items-center justify-center gap-2 shadow-2xl hover:shadow-pink-900/30 hover:scale-105 hover:text-fuchsia-50 '>
                  <Code className='mr-2 group-hover:scale-110 transition-transform' />
                  <a href='#projects'>My projects</a>
                </button>

                <button className='group border border-white/30 text-white hover:bg-white/40 hover:text-violet-300 sm:px-4 md:px-6 lg:px-8 py-4 rounded-2xl font-semibold transition-all duration-200 flex items-center justify-center gap-1 shadow-2xl hover:shadow-violet-900/30 hover:scale-105 '>
                  <Mail className='mr-2 group-hover:scale-110 transition-transform' />
                  <a href='#projects'>Contact Me</a>
                </button>
              </div>

              {/* Stats */}

              <div className='grid grid-cols-3 gap-4 font-bold lg:text-3xl text-2xl'>
                <div className='text-center'>
                  <div className=' text-white mb-1'>NN</div>
                  <div className='text-gray-200 text-sm'>Projects</div>
                </div>
                <div className='text-center'>
                  <div className='text-white mb-1'>NN</div>
                  <div className='text-gray-200 text-sm'>Experience</div>
                </div>
                <div className='text-center'>
                  <div className='text-white mb-1'>NN</div>
                  <div className='text-gray-200 text-sm'>Stacks</div>
                </div>
              </div>
            </div>

            {/* Showcase projects*/}

            <div className='relative'>
              <div className='relative bg-white/10 backdrop:blur-xl rounded-3xl p-6 border border-white/20 shadow-2xl'>
                <div className='space-y-6 max-w-3xl'>
                  <div className='flex items-center space-x-4 p-4 bg-white/10 backdrop:blur-md rounded-2xl'>
                    <div className='w-12 h-12 bg-gradient-to-r from-orange-200 via-purple-200 to-purple-300 rounded-2xl flex items-center justify-center'>
                      <span className='text-white font-semibold'>JS</span>
                    </div>
                    <div>
                      <h3 className='text-white font-semibold'>
                        Web development
                        <p className='text-gray-100 text-sm'>
                          Responsive interfaces
                        </p>
                      </h3>
                    </div>
                    <div className='ml-auto'>
                      <div className='w-3 h-3 bg-green-400 rounded-full animate-pulse'></div>
                    </div>
                  </div>

                  <div className='flex items-center space-x-4 p-4 bg-white/10 backdrop:blur-md rounded-2xl'>
                    <div className='w-12 h-12 bg-gradient-to-r from-cyan-100 via-pink-200 to-pink-300 rounded-2xl flex items-center justify-center backdrop:blur-sm'>
                      <span className='text-white font-semibold'>RJ</span>
                    </div>
                    <div>
                      <h3 className='text-white font-semibold'>
                        Mobile Development
                        <p className='text-gray-100 text-sm'>
                          Modern applications
                        </p>
                      </h3>
                    </div>
                    <div className='ml-auto'>
                      <div className='w-3 h-3 bg-green-400 rounded-full animate-pulse'></div>
                    </div>
                  </div>

                  <div className='flex items-center space-x-4 p-4 bg-white/10 backdrop:blur-md rounded-2xl'>
                    <div className='w-12 h-12 bg-gradient-to-r from-red-200 to-green-200 rounded-2xl flex items-center justify-center'>
                      <span className='text-white font-semibold'>UX/UI</span>
                    </div>
                    <div>
                      <h3 className='text-white font-semibold'>
                        UX/UI Design
                        <p className='text-gray-100 text-sm'>
                          Interactive & intuitive interfaces
                        </p>
                      </h3>
                    </div>
                    <div className='ml-auto'>
                      <div className='w-3 h-3 bg-green-400 rounded-full animate-pulse'></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
