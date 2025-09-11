import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

export const Projects = () => {
  return (
    <section
      id='projects'
      className='py-20 bg-pink-200/20 backdrop-blur-sm relative overflow-hidden'
    >
      {/* Background */}
      <div className='absolute top-0 right-0 w-96 h-96 bg-gradient-to-l from-violet-200 to-transparent rounded-full translate-x-48'></div>
      <div className='absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-l from-pink-200 to-transparent rounded-full translate-y-48'></div>

      {/* Content */}
      <div className='max-w-7xl mx-auto py-4 sm:px-6 lg:px-8 relative z-10'>
        <div className='text-center mb-16'>
          <div className='inline-flex items-center px-4 py-4 bg-gradient-to-r from-violet-300 to-pink-100 rounded-full mb-8'>
            <span className='text-violet-400 font-semibold'>Projects</span>
          </div>
          <h2 className='text-2xl md:text-3xl lg:text-5xl font-bold text-violet-300 mb-6 leading-tight'>
            Here are some of the{' '}
            <span className='block text-transparent bg-clip-text bg-gradient-to-r from-violet-200 to-pink-300'>
              projects
            </span>
            that I've worked on:
          </h2>
        </div>

        <div className={`grid grid-cols-1 gap-8`}>
          <div
            className={`group relative bg-gradient-to-br rounded-3xl p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-white/50 overflow-hidden`}
          >
            {/* Background */}
            <div className='absolute top-0 right-0 w-32 h-32 opacity-10'>
              <div
                className={`w-full h-full bg-gradient-to-br from-pink-300 to-violet-300 rounded-full transform translate-x-16 -translate-y-16 group-hover:scale-150 transition-all `}
              ></div>
            </div>

            <div className='relative z-10'>
              <div className='w-16 h-16 br-gradient-to-r rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg'>
                <FaGithub className='text-white' size={28} />
              </div>
              <h3 className='text-2xl font-bold text-pink-300 mb-4'>
                Project title
              </h3>
              <p className='text-violet-300 leading-relaxed'>
                Project description
              </p>
              <ul>
                <li className='flex items-center text-violet-300'>
                  <div
                    className={`w-2 h-2 bg-gradient-to-r rounded-full mr-3 flex-shrink-0`}
                  ></div>
                  <span className='text-sm front-medium'>Stack 1</span>
                </li>
                <li>Stack 2</li>
                <li>Stack 3</li>
              </ul>
              Check out project
              <div className='w-16 h-16 br-gradient-to-r rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg'>
                <FaExternalLinkAlt
                  className='text-pink-300 group-hover:/btn:translate-x-1 transition-all duration-300'
                  size={28}
                />
              </div>
              <button className='w-16 h-16 br-gradient-to-r rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg'>
                <FaGithub
                  className='text-pink-300 group-hover:/btn:translate-x-1 transition-all duration-300'
                  size={28}
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
