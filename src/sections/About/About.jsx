import { Card } from '@/components/Card/Card'
import skillsList from '../../utils/skillsList'

export const About = () => {
  return (
    <section
      id='about'
      className='bg-[url("/images/bkg-retro-gaming.png")] bg-no-repeat bg-cover bg-center'
    >
      <div className='min-h-screen py-32 relative overflow-hidden'>
        <div className='absolute inset-0 opacity-25'>
          <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-r from-violet-300 via-pink-300 to-pink-600 transform rotate-12 scale-150'></div>
        </div>

        <div className='max-w-7xl mx-auto py-4 px-8 md:px-6 lg:px-10 relative z-10'>
          <div className='text-center mb-16'>
            <div className='inline-flex px-8 py-4 bg-gradient-to-r from-purple-200 to-pink-200 text-4xl rounded-full font-bold'>
              <span className='animate-pulse text-transparent bg-clip-text bg-gradient-to-r from-violet-300 to-pink-300'>
                <h2 className='leading-tight'>🌸 About Me 🌸</h2>
              </span>
            </div>
          </div>

          {/* Description */}
          <div className='retro-window mx-auto max-w-5xl mb-16 border border-pink-300/60 shadow-xl'>
            <div className='window-header flex items-center justify-between px-4 py-2 bg-gradient-to-r from-pink-200 to-pink-200/60 text-md font-press-start-2p-lg text-pink-400/70 border-b border-pink-300/60'>
              <h3 className='font-bold'>about_me.exe</h3>
              <button className='text-pink-400/70 hover:scale-105 hover:text-violet-400/70 transition-colors'>
                X
              </button>
            </div>
            <div className='window-body bg-pink-50/80 text-violet-300 p-6 font-press-start-2p-sm text-base'>
              <p className='m-8'>
                I'm a{' '}
                <span className='font-bold text-pink-400/40'>front-end</span>{' '}
                developer from{' '}
                <span className='bg-pink-400/40 text-transparent bg-clip-text font-bold'>
                  Buenos Aires, Argentina
                </span>{' '}
                who loves creating innovative and intuitive experiences for
                users.
              </p>{' '}
              <p className='m-8'>
                I've created this portfolio as a fun way to showcase some of my
                projects and skills, regadring this main tech stack:
              </p>
              {/* Stack */}
              <div className='m-8'>
                <div className='grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4 lg:gap-8'>
                  {skillsList.map((skill, skillIndex) => (
                    <Card
                      key={skillIndex}
                      title={skill.title}
                      icon={skill.icon}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
