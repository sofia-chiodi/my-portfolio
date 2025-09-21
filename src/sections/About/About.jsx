import { Card } from '@/components/Card/Card'
import skillsList from '../../utils/skillsList'

export const About = () => {
  return (
    <section id='about'>
      <div className='min-h-screen py-32 relative overflow-hidden'>
        <div className='absolute inset-0 opacity-25'>
          <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-r from-violet-300 via-pink-300 to-pink-600 transform rotate-12 scale-150'></div>
        </div>

        <div className='max-w-7xl mx-auto py-4 px-8 md:px-6 lg:px-10 relative z-10'>
          <div className='text-center mb-16'>
            <div className='inline-flex px-8 py-4 bg-gradient-to-r from-purple-200 to-pink-200 text-4xl rounded-full font-bold'>
              <span className='animate-pulse text-transparent bg-clip-text bg-gradient-to-r from-violet-300 to-pink-300'>
                <h2 className='leading-tight'>✨ About Me ✨</h2>
              </span>
            </div>
          </div>

          {/* Description */}
          <div className='retro-window mx-auto max-w-3xl mb-16 border border-pink-300/60 shadow-xl'>
            <div className='window-header flex items-center justify-between px-4 py-2 bg-gradient-to-r from-pink-200 to-pink-200/60 text-md font-mono text-pink-400/70 border-b border-pink-300/60'>
              <h3 className='font-bold'>about_me.txt</h3>
              <button className='text-pink-400/70 hover:scale-105 hover:text-violet-400/70 transition-colors'>
                X
              </button>
            </div>
            <div className='window-body bg-pink-50 text-violet-400/80 p-6 font-mono text-base'>
              <p>
                I'm a{' '}
                <span className='font-bold text-pink-400/50'>front-end</span>{' '}
                developer from{' '}
                <span className='bg-pink-400/50 text-transparent bg-clip-text font-bold font-mono'>
                  📍 Buenos Aires, Argentina
                </span>{' '}
                who loves creating innovative and intuitive experiences for
                users.
              </p>{' '}
              <p className='mt-5'>
                I've created this portfolio as a fun way to showcase some of my
                projects and skills.
              </p>
            </div>
          </div>

          {/* Stack */}
          <div className='grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4 lg:gap-6'>
            {skillsList.map((skill, skillIndex) => (
              <Card key={skillIndex} title={skill.title} icon={skill.icon} />
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
