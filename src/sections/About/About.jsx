import { ArrowRightIcon, HeartIcon } from 'raster-react'
import { useInView } from 'react-intersection-observer'

export const About = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  })

  return (
    <section
      id='about'
      ref={ref}
      className='bg-[url("/images/bkg-retro-gaming.png")] bg-no-repeat bg-cover bg-center'
    >
      <div className='min-h-screen py-32 relative overflow-hidden bg-pink-50/20'>
        <div className='absolute inset-0 opacity-25'>
          <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-r from-violet-300 via-pink-300 to-pink-600 transform rotate-12 scale-150'></div>
        </div>

        <div className='max-w-7xl mx-auto py-4 px-8 md:px-6 lg:px-10 relative z-10'>
          <div className='text-center mb-16'>
            <div className='inline-flex px-8 py-4 bg-gradient-to-r from-purple-200 to-pink-200 text-4xl rounded-full font-bold shadow-xl shadow-pink-900/20'>
              <span className='animate-pulse text-transparent bg-clip-text bg-gradient-to-r from-violet-300 to-pink-300'>
                <h2 className='leading-tight flex items-center gap-1'>
                  <HeartIcon size={40} strokeWidth={5} color='#F9A8D4' />
                  About Me{' '}
                  <HeartIcon
                    size={40}
                    strokeWidth={5}
                    color='#F9A8D4'
                    className='ml-1'
                  />
                </h2>
              </span>
            </div>
          </div>

          {/* Description */}
          <div className='max-w-5xl mx-auto mb-16'>
            <div className='flex justify-center'>
              <div className='retro-window border-2 border-pink-300/60 shadow-xl shadow-pink-900/30'>
                <div className='window-header flex items-center justify-between px-4 py-2 bg-gradient-to-r from-pink-200 to-pink-200/60 text-md font-press-start-2p-lg text-pink-400/70 border-b border-pink-300/60'>
                  <h3 className='font-bold'>about_me.exe</h3>
                  <button className='text-pink-400/70 hover:scale-105 hover:text-violet-400/70 transition-colors'>
                    X
                  </button>
                </div>
                <div className='flex flex-col window-body bg-pink-50/80 text-violet-300 p-6 font-press-start-2p-sm gap-2'>
                  <p
                    className={`typewriter ${inView ? 'animate-typing-1' : ''}`}
                  >
                    I'm a{' '}
                    <span className='bg-pink-400/40 text-transparent bg-clip-text font-bold'>
                      front-end
                    </span>{' '}
                    developer from{' '}
                    <span className='bg-pink-400/40 text-transparent bg-clip-text font-bold'>
                      Buenos Aires, Argentina.
                    </span>{' '}
                  </p>
                  <p
                    className={`typewriter ${inView ? 'animate-typing-2' : ''}`}
                  >
                    My goal is creating innovative & intuitive experiences.
                  </p>

                  <p
                    className={`mt-10 typewriter ${
                      inView ? 'animate-typing-3' : ''
                    }`}
                  >
                    I've developed this portfolio as a fun way to showcase{' '}
                  </p>
                  <p
                    className={`typewriter ${inView ? 'animate-typing-4' : ''}`}
                  >
                    some of my skills and projects that I've worked on.
                  </p>

                  <button className='flex flex-row-reverse items-center gap-2 bottom-0 right-0 hover:scale-102 text-pink-400/70 rounded-full hover:text-violet-400/70 mt-4 animate-button-bounce-x duration-200 transition-all'>
                    <ArrowRightIcon size={50} strokeWidth={5} radius={1} />
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
