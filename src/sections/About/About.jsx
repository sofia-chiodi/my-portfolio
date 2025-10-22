import { useState, useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { Card } from '@/components/Card/Card'
import skillsList from '../../utils/skillsList'
import { SectionTitle } from '@/components/SectionTitle/SectionTitle'
import { FaArrowDown } from 'react-icons/fa'

export const About = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  })

  const [visibleMessage, setVisibleMessage] = useState(0)
  const [showSkills, setShowSkills] = useState(false)

  useEffect(() => {
    if (inView) {
      const animationIntervals = [
        setTimeout(() => setVisibleMessage(1), 200),
        setTimeout(() => setVisibleMessage(2), 1200),
        setTimeout(() => setVisibleMessage(3), 2200),
        setTimeout(() => setVisibleMessage(4), 3200),
        setTimeout(() => setVisibleMessage(5), 4200),
      ]
      return () => {
        animationIntervals.forEach((interval) => clearTimeout(interval))
      }
    }
  }, [inView])

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleShowSkills = () => {
    setShowSkills(true)
    const skillSection = document.getElementById('skills')
    if (skillSection) {
      const offset = 80
      const sectionTop =
        skillSection.getBoundingClientRect().top + window.pageYOffset
      window.scrollTo({
        top: sectionTop - offset,
        behavior: 'smooth',
      })
    }
  }

  return (
    <section id='about' ref={ref} className='relative overflow-hidden'>
      <div className='min-h-screen py-32 relative'>
        <div className='absolute inset-0 opacity-40 z-0'>
          <div className='w-full h-full bg-gradient-to-r from-fuchsia-700/80 via-pink-400/80 to-violet-300'></div>
        </div>

        <div className='max-w-7xl mx-auto py-4 px-6 md:px-12 lg:px-10 relative z-10'>
          <div className='text-center'>
            <SectionTitle>✨ About me ✨</SectionTitle>

            {/* Abuout me */}
            <div className='max-w-3xl mx-auto mb-16 space-y-6 relative'>
              <div
                className={`flex justify-start pr-12 transition-all duration-700 ${
                  visibleMessage >= 1
                    ? 'animate-fade-in-delay-left opacity-100'
                    : 'opacity-0 translate-y-5'
                }`}
              >
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

              <div
                className={`flex justify-end pl-12 transition-all duration-700 ${
                  visibleMessage >= 2
                    ? 'animate-fade-in-delay-right opacity-100'
                    : 'opacity-0 translate-y-5'
                }`}
              >
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

              <div
                className={`flex justify-start pr-12 transition-all duration-700 ${
                  visibleMessage >= 3
                    ? 'animate-fade-in-delay-left opacity-100'
                    : 'opacity-0 translate-y-5'
                }`}
              >
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
                    I've worked on
                  </p>
                </div>
              </div>

              <div
                className={`flex justify-end pl-12 transition-all duration-700 ${
                  visibleMessage >= 4
                    ? 'animate-fade-in-delay-right opacity-100'
                    : 'opacity-0 translate-y-5'
                }`}
              >
                <div className='max-w-xs md:max-w-md p-4 rounded-2xl bg-pink-300/30 backdrop-blur-md shadow-md text-left'>
                  <p className='text-white text-lg md:text-xl leading-relaxed'>
                    Check out below my frequently used{' '}
                    <span className='font-semibold bg-gradient-to-r from-pink-300 to-violet-300 bg-clip-text text-transparent'>
                      tech stacks!
                    </span>{' '}
                  </p>
                </div>
              </div>

              <div
                className={`flex flex-col items-center gap-3 mt-10 transition-all duration-700 ${
                  visibleMessage >= 5
                    ? 'opacity-100'
                    : 'opacity-0 pointer-events-none'
                }`}
              >
                <p className='text-white/80 text-lg md:text-xl font-medium animate-pulse tracking-wide'>
                  Press to show skills
                </p>
                <button
                  onClick={handleShowSkills}
                  className='bg-gradient-to-r from-violet-300 to-pink-300 
      rounded-full p-3 hover:scale-110 transition-all duration-300 text-white 
      border border-white/80 shadow-lg'
                >
                  <FaArrowDown
                    size={24}
                    className='animate-bounce hover:scale-110 transition-all duration-200'
                  />
                </button>
              </div>
            </div>

            {/* Skills */}
            <div
              id='skills'
              className={`mt-16 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 transition-all duration-700 ${
                showSkills
                  ? 'opacity-100 translate-y-0 h-auto'
                  : 'opacity-0 h-0 overflow-hidden pointer-events-none'
              }`}
              style={{
                transition:
                  'opacity 0.7s ease, transform 0.7s ease, height 0.5s ease',
                transform: showSkills ? 'translateY(0)' : 'translateY(20px)',
              }}
            >
              {skillsList.map((skill, index) => (
                <div
                  key={skill.id}
                  className={`transition-all duration-700 ease-out delay-[${
                    index * 100
                  }ms] ${
                    showSkills
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-6'
                  }`}
                >
                  <Card title={skill.title} icon={skill.icon} />
                </div>
              ))}
            </div>

            <div className='text-center mt-20'>
              <div className='bg-gradient-to-r from-violet-300/80 to-pink-300/80 rounded-3xl p-6 md:p-10 relative overflow-hidden'>
                <div className='absolute inset-0 bg-black/10'></div>
                <div className='relative z-10'>
                  <h3 className='text-2xl md:text-3xl font-bold mb-4 text-white'>
                    Get in touch with me!
                  </h3>
                  <button
                    className='bg-gradient-to-r from-pink-300 to-violet-300 text-white px-6 py-3 rounded-xl font-semibold hover:scale-105 transition-all duration-300 shadow-xl'
                    onClick={() => scrollToSection('contact')}
                  >
                    Contact
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
