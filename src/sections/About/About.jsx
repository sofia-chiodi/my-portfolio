import { Card } from '@/components/Card/Card'
import skillsList from '../../utils/skillsList'

export const About = () => {
  return (
    <section id='about'>
      <div className='min-h-screen py-32 bg-gradient-to-r from-gray-50 to-white relative overflow-hidden'>
        <div className='absolute inset-0 opacity-25'>
          <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-r from-violet-300 via-pink-300 to-pink-600 transform rotate-12 scale-150'></div>
        </div>

        <div className='max-w-7xl mx-auto py-4 px-10 md:px-20 lg:px-10 relative z-10'>
          <div className='text-center mb-16'>
            <div className='inline-flex px-8 py-4 bg-gradient-to-r from-purple-200 to-pink-200 text-3xl rounded-full mb-8 font-bold'>
              <span className='animate-pulse text-transparent bg-clip-text bg-gradient-to-r from-violet-300 to-pink-300'>
                ✨ About Me ✨
              </span>
            </div>

            <p className='mt-6 text-2xl md:text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-violet-300 to-pink-300 mb-6 max-w-3xl mx-auto '>
              I'm a{' '}
              <span className='font-bold text-violet-300/80'>front-end</span>{' '}
              developer from 📍 Buenos Aires, Argentina, who loves creating
              innovative and intuitive experiences for users.
            </p>

            <p className='mt-6 text-lg md:text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-violet-300 to-violet-300/50 mb-6 max-w-3xl mx-auto'>
              I've created this portfolio as a fun way to showcase my projects
              and some of my skills regarding this{' '}
              <span className='text-shadow-2xs'>tech stack</span>:
            </p>
          </div>

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
