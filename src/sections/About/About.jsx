import { Card } from '@/components/Card/Card'
import skillsList from '../../utils/skillsList'
import { SectionTitle } from '@/components/SectionTitle/SectionTitle'
import { FaArrowDown } from 'react-icons/fa'

export const About = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id='about'>
      <div className='min-h-screen py-32 relative overflow-hidden'>
        <div className='absolute inset-0 opacity-30'>
          <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-r from-fuchsia-700 via-pink-400/80 to-violet-300 transform scale-150'></div>
        </div>

        <div className='max-w-7xl mx-auto py-4 px-6 md:px-12 lg:px-10 relative z-10'>
          <div className='text-center'>
            <SectionTitle>✨ About me ✨</SectionTitle>

            <div className='max-w-3xl mx-auto mb-16 space-y-6'>
              <div className='flex justify-start pr-12 animate-fade-in-delay-1'>
                <div className='max-w-xs md:max-w-md p-4 rounded-2xl bg-violet-300/20 backdrop-blur-md shadow-md text-left'>
                  <p className='text-white text-lg md:text-xl leading-relaxed'>
                    I'm a{' '}
                    <span className='font-semibold bg-gradient-to-r from-pink-300 to-violet-300 bg-clip-text text-transparent'>
                      front-end developer
                    </span>{' '}
                    from{' '}
                    <span className='bg-gradient-to-r from-pink-300 to-violet-300 bg-clip-text text-transparent font-semibold'>
                      📍 Buenos Aires, Argentina
                    </span>
                  </p>
                </div>
              </div>

              <div className='flex justify-end pl-12 animate-fade-in-delay-2'>
                <div className='max-w-xs md:max-w-md p-4 rounded-2xl bg-pink-300/30 backdrop-blur-md shadow-md text-left'>
                  <p className='text-white text-lg md:text-xl leading-relaxed'>
                    I love creating{' '}
                    <span className='font-semibold bg-gradient-to-r from-pink-300 to-violet-300 bg-clip-text text-transparent'>
                      innovative & intuitive experiences
                    </span>{' '}
                    for users{' '}
                    <span className='font-bold bg-gradient-to-r from-pink-300 to-violet-300 bg-clip-text text-transparent'>
                      ✨
                    </span>
                  </p>
                </div>
              </div>

              <div className='flex justify-start pr-12 animate-fade-in-delay-3'>
                <div className='max-w-xs md:max-w-md p-4 rounded-2xl bg-violet-300/20 backdrop-blur-md shadow-md text-left'>
                  <p className='text-white text-lg md:text-xl leading-relaxed'>
                    This{' '}
                    <span className='font-semibold text-violet-300/70'>
                      portfolio
                    </span>{' '}
                    is a fun way to showcase some of the{' '}
                    <span className='font-semibold text-pink-300/70'>
                      projects
                    </span>{' '}
                    I’ve worked on
                  </p>
                </div>
              </div>

              <div className='flex justify-end pl-12 animate-fade-in-delay-4'>
                <div className='max-w-xs md:max-w-md p-4 rounded-2xl bg-pink-300/30 backdrop-blur-md shadow-md text-left'>
                  <p className='text-white text-lg md:text-xl leading-relaxed'>
                    Check out below my most used{' '}
                    <span className='font-semibold bg-gradient-to-r from-pink-300 to-violet-300 bg-clip-text text-transparent'>
                      tech stacks!
                    </span>{' '}
                  </p>
                </div>
              </div>

              <button
                className='right-6 z-50 bg-gradient-to-r from-violet-300 to-pink-300 
                      rounded-full p-2 hover:scale-110 transition-all duration-300 text-white/80 
                      border border-white/80 shadow-lg'
              >
                <FaArrowDown
                  size={20}
                  className='animate-button-bounce-y hover:scale-110 transition-all duration-200'
                />
              </button>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-4 gap-6'>
              {skillsList.map((skill) => (
                <Card
                  key={skill.id}
                  title={skill.title}
                  description={skill.description}
                  icon={skill.icon}
                />
              ))}
            </div>

            <div className='text-center mt-20'>
              <div className='bg-gradient-to-r from-violet-300/80 to-pink-300/80 rounded-3xl p-6 md:p-10 relative overflow-hidden'>
                <div className='absolute inset-0 bg-black/10'></div>
                <div className='relative z-10'>
                  <h3 className='text-2xl md:text-3xl font-bold mb-4 text-white'>
                    Check out my projects!
                  </h3>
                  <button
                    className='bg-gradient-to-r from-pink-300 to-violet-300 text-white px-6 py-3 rounded-xl font-semibold hover:scale-105 transition-all duration-300 shadow-xl'
                    onClick={() => scrollToSection('portfolio')}
                  >
                    Portfolio
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
