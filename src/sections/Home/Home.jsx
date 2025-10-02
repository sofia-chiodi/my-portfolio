import { FaCode, FaArrowRight } from 'react-icons/fa6'
import { IoIosPhonePortrait } from 'react-icons/io'
import { IoBrowsersOutline } from 'react-icons/io5'

import contactLinks from '@/utils/contactLinks'

export const Home = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      <section
        id='home'
        className='min-h-screen py-24 sm:py-32 flex items-center relative overflow-hidden bg-[url("/images/Background.jpeg")] bg-no-repeat bg-cover'
      >
        <div className='max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-10'>
          <div className='md:grid md:grid-cols-2 md:gap-20 lg:gap-35 items-center'>
            <div className='mb-12 lg:mb-0'>
              <div className='inline-flex items-center px-4 py-2 bg-black/5 backdrop-blur-sm rounded-full border border-white/15 mb-6'>
                <span className='w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse'></span>
                <span className='text-white text-md'>Hello! Sofía here.</span>
              </div>
              <h1 className='text-3xl sm:text-5xl lg:text-6xl font-black text-white mb-6 lg:mb-10 leading-tight'>
                Software{' '}
                <span className='block text-transparent animate-pulse bg-clip-text bg-gradient-to-r from-violet-200 to-pink-300 drop-shadow-[0_0_6px_rgba(236,72,153,0.6)]'>
                  developer
                </span>
              </h1>
              <p className='text-lg text-white mb-10 leading-tight max-w-lg animate-fade-in-delay-1'>
                Specialized in{' '}
                <span className='text-pink-400/60 font-semibold'>
                  front-end{' '}
                </span>
                technologies
              </p>

              <div className='px-6 py-4 lg:px-0 lg:py-0 flex flex-col md:flex-row gap-4'>
                <button
                  className='group bg-gradient-to-r from-violet-300 to-pink-300 hover:to-pink-400 text-white sm:px-4 md:px-6 lg:px-8 py-4 rounded-2xl font-semibold transition-all duration-200 flex items-center justify-center gap-2 shadow-xl hover:shadow-pink-950/20 hover:scale-105 hover:text-fuchsia-50 cursor-pointer'
                  onClick={() => scrollToSection('portfolio')}
                >
                  <FaCode
                    className='mr-2 group-hover:scale-110 transition-transform'
                    size={20}
                  />
                  My projects
                </button>

                <button
                  className='group border border-white/30 text-white hover:bg-white/40 hover:text-violet-300 sm:px-4 md:px-6 lg:px-8 py-4 rounded-2xl font-semibold transition-all duration-200 flex items-center justify-center gap-1 shadow-xl hover:shadow-violet-950/20 hover:scale-105 cursor-pointer'
                  onClick={() => scrollToSection('about')}
                >
                  <FaArrowRight
                    className='mr-2 group-hover:scale-110 transition-transform'
                    size={20}
                  />
                  About me
                </button>
              </div>
            </div>

            {/* About */}
            <div className='relative'>
              {/* Links */}
              <div className='relative bg-white/10 backdrop:blur-xl rounded-3xl border border-white/20 shadow-xl mb-8'>
                <h3 className='text-white text-center justify-center font-bold text-xl mt-6'>
                  Let's work together!
                </h3>
                <div className='grid grid-cols-3 gap-12 font-bold lg:text-2xl text-xl px-12 py-6'>
                  {contactLinks.map((link, linkIndex) => {
                    return (
                      <a
                        href={link.url}
                        key={linkIndex}
                        target='_blank'
                        rel='noopener noreferrer'
                        className={`p-4 rounded-2xl font-semibold hover:scale-110 transition-all duration-300 shadow-lg text-white ${link.homeBgColor} inline-flex items-center justify-center`}
                      >
                        <link.icon size={24} />
                      </a>
                    )
                  })}
                </div>
              </div>

              <div className='relative bg-white/10 backdrop:blur-xl rounded-3xl p-6 border border-white/20 shadow-xl'>
                <div className='space-y-full max-w-3xl'>
                  <div className='flex items-center space-x-4 p-4 bg-white/20 backdrop:blur-md rounded-2xl mb-4'>
                    <div className='w-10 h-10 bg-gradient-to-r from-orange-200 via-violet-200/70 to-violet-300/70 rounded-2xl flex items-center justify-center backdrop:blur-sm'>
                      <span className='text-white font-semibold'>
                        <IoIosPhonePortrait size={28} className='font-bold' />
                      </span>
                    </div>
                    <div>
                      <h4 className='text-violet-300/80 font-bold'>
                        Mobile Development
                        <p className='text-white text-sm'>
                          Modern applications
                        </p>
                      </h4>
                    </div>
                    <div className='ml-auto'>
                      <div className='w-3 h-3 bg-green-400 rounded-full animate-pulse'></div>
                    </div>
                  </div>

                  <div className='flex items-center space-x-4 p-4 bg-white/20 backdrop:blur-md rounded-2xl'>
                    <div className='w-10 h-10 bg-gradient-to-r from-blue-200/70 via-pink-200/70 to-pink-300/70 rounded-2xl flex items-center justify-center'>
                      <span className='text-white font-semibold'>
                        <IoBrowsersOutline size={24} />
                      </span>
                    </div>
                    <div>
                      <h4 className='text-pink-300/80 font-bold'>
                        Web development
                        <p className='text-white text-sm'>
                          Responsive interfaces
                        </p>
                      </h4>
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
