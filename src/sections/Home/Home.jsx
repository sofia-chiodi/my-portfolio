import { FaCode, FaArrowRight } from 'react-icons/fa6'
import { IoBrowsersOutline } from 'react-icons/io5'
import { HomeButton } from '@/components/HomeButton/HomeButton.jsx'
import { TextContainer } from '../../components/TextContainer/TextContainer'

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
        className='min-h-screen py-32 flex items-center relative bg-[url("/images/Background.jpeg")] bg-no-repeat bg-cover'
      >
        <div className='max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-10 text-center md:text-left'>
          <div className='md:grid md:grid-cols-2 md:gap-20 lg:gap-35 items-center'>
            <div className='mb-8 lg:mb-0'>
              <div className='inline-flex items-center px-4 py-2 bg-black/5 backdrop-blur-sm rounded-full border border-white/15 mb-8'>
                <span className='w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse'></span>
                <span className='text-white text-lg font-large'>
                  Hello! Sofía here.
                </span>
              </div>
              <h1 className='text-6xl lg:text-7xl font-black text-white mb-8 md:mb-10 leading-tight'>
                Software{' '}
                <span className='block text-transparent animate-pulse bg-clip-text bg-gradient-to-r from-violet-200 to-pink-300 drop-shadow-[0_0_6px_rgba(236,72,153,0.6)]'>
                  developer
                </span>
              </h1>
              <p className='text-md md:text-lg text-white mb-8 md:mb-10 leading-tight max-w-lg animate-fade-in-delay-1'>
                Specialized in{' '}
                <span className='text-pink-400/60 font-semibold'>
                  front-end{' '}
                </span>
                technologies
              </p>

              <div className='flex flex-row gap-4 justify-center sm:justify-start'>
                <HomeButton
                  className='bg-gradient-to-r from-violet-300 to-pink-300 hover:to-pink-400 hover:shadow-pink-950/20 hover:text-fuchsia-50'
                  onClick={() => scrollToSection('portfolio')}
                >
                  <FaCode
                    className='mr-2 group-hover:scale-110 transition-transform'
                    size={20}
                  />
                  My projects
                </HomeButton>

                <HomeButton
                  className='border border-white/30 hover:bg-white/40 hover:text-violet-300 hover:shadow-violet-950/20'
                  onClick={() => scrollToSection('about')}
                >
                  <FaArrowRight
                    className='mr-2 group-hover:scale-110 transition-transform'
                    size={20}
                  />
                  About me
                </HomeButton>
              </div>
            </div>

            <div className='relative'>
              <TextContainer className='lg:mt-35'>
                <h3 className='text-white text-center justify-center font-bold text-xl mb-6'>
                  Let's work together!
                </h3>
                <div className='grid grid-cols-3 gap-12 font-bold lg:text-2xl text-xl px-6'>
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
              </TextContainer>

              <TextContainer className='p-6'>
                <div className='space-y-full max-w-3xl'>
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
              </TextContainer>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
