import { Card } from '@/components/Card/Card'
import skillsList from './skillsList'

export const About = () => {
  return (
    <section id='about'>
      <div className='min-h-screen py-20 bg-gradient-to-r from-gray-50 to-white relative overflow-hidden'>
        {/* Background */}
        <div className='absolute inset-0 opacity-30'>
          <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-r from-violet-300 to-pink-600 transform rotate-12 scale-150'></div>
        </div>

        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
          <div className='text-center mb-16'>
            <div className='inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full mb-6'>
              <span>About me</span>
            </div>

            <h2 className='text-4xl md:text-5xl font-bold text-gray-700 mb-6'>
              I'm a <span>front-end developer</span> from Buenos Aires,
              Argentina, who loves creating innovative and intuitive experiences
              for users.
            </h2>

            <p className='text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed'>
              I've created this portfolio as a fun way to showcase my projects
              and some of my skills regarding this{' '}
              <span className='text-shadow-2xs'>tech stack</span>:
            </p>
          </div>

          {/* Stack */}
          <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
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
          <div className='text-center mt-16'>
            <div className='bg-gradient-to-r from-violet-300 to-pink-300 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden'>
              <div className='absolute inset-0 bg-black/10'></div>
              <div className='relative z-10'>
                <h3 className='text-2xl md:text-3xl font-bold mb-4'>
                  Contact details
                </h3>
                <button className='bg-white text-violet-400 px-8 py-4 rounded-2xl font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-xl'>
                  Contact me
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
