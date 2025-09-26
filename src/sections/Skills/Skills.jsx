import { Card } from '@/components/Card/Card'
import skillsList from '../../utils/skillsList'
import { SectionTitle } from '@/components/SectionTitle/SectionTitle'

export const Skills = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id='skills'>
      <div className='min-h-screen py-32 relative overflow-hidden'>
        <div className='absolute inset-0 opacity-30'>
          <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-r from-fuchsia-700 via-pink-400/80 to-violet-300 transform rotate-12 scale-150'></div>
        </div>

        <div className='max-w-7xl mx-auto py-4 px-10 md:px-20 lg:px-10 relative z-10'>
          <div className='text-center'>
            <SectionTitle>✨ Skills ✨</SectionTitle>

            <h2 className='mb-16 text-2xl md:text-3xl lg:text-4xl font-bold text-violet-300 leading-tight'>
              These are the{' '}
              <span className='text-transparent bg-clip-text bg-gradient-to-r from-violet-300 via-pink-300 to-violet-300'>
                tech stacks{' '}
              </span>
              I use the most
            </h2>

            {/* Stack */}
            <div className='grid grid-cols-2 md:grid-cols-4 gap-6'>
              {skillsList.map((skill) => (
                <Card
                  key={skill.id}
                  title={skill.title}
                  description={skill.description}
                  icon={skill.icon}
                />
              ))}
            </div>

            {/* Contact */}
            <div className='text-center mt-20'>
              <div className='bg-gradient-to-r from-violet-300/80 to-pink-300/80 rounded-3xl p-4 md:p-8 relative overflow-hidden'>
                <div className='absolute inset-0 bg-black/10'></div>
                <div className='relative z-10'>
                  <h3 className='text-2xl md:text-3xl font-bold mb-4 text-white'>
                    Check out my projects!
                  </h3>
                  <button
                    className='bg-white/60 text-violet-400/60 px-6 py-2 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-xl'
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
