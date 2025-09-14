import projectsList from '@/utils/projectsList'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

export const Projects = () => {
  return (
    <section
      id='projects'
      className='min-h-screen py-32 bg-white backdrop-blur-sm relative overflow-hidden'
    >
      {/* Background */}
      <div className='absolute top-0 right-0 w-96 h-96 bg-gradient-to-l from-violet-200 to-transparent rounded-full translate-x-48'></div>
      <div className='absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-l from-pink-200 to-transparent rounded-full translate-y-48'></div>

      {/* Content */}
      <div className='max-w-7xl mx-auto py-4 px-10 md:px-20 lg:px-10 relative z-10'>
        <div className='text-center mb-16'>
          <div className='inline-flex px-8 py-4 bg-gradient-to-r from-pink-200 to-purple-200 text-3xl rounded-full mb-8 font-bold'>
            <span className='animate-pulse text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-violet-300'>
              ✨ Projects ✨
            </span>
          </div>
          <h2 className='mt-8 text-2xl md:text-3xl lg:text-4xl font-bold text-violet-300 mb-6 leading-tight'>
            Here are some of the{' '}
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-violet-200 to-pink-300'>
              projects{' '}
            </span>
            that I've worked on:
          </h2>
        </div>

        {/* Projects */}
        <div className={`grid grid-cols-1 gap-8 max-w-7xl mx-auto`}>
          {projectsList.map((project, index) => {
            return (
              <div
                key={index}
                className={`group relative rounded-3xl p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-white/50 overflow-hidden bg-gradient-to-br ${project.bgColor}`}
              >
                {/* Edge pattern */}
                <div className='absolute top-0 right-0 w-40 h-40 opacity-10'>
                  <div
                    className={`w-full h-full bg-gradient-to-br ${project.borderColor}  rounded-full transform translate-x-16 -translate-y-16 group-hover:scale-150 transition-all `}
                  ></div>
                </div>

                <div className='relative z-10'>
                  <div className='w-16 h-16 br-gradient-to-r rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg '>
                    {project.image}
                  </div>
                  <h3
                    className={`${project.titleColor} text-3xl font-bold mb-4`}
                  >
                    {project.title}
                  </h3>
                  <p className={`${project.textColor} leading-relaxed`}>
                    {project.description}
                  </p>
                  <h4
                    className={`${project.titleColor} font-semibold text-xl mt-8`}
                  >
                    Stack used:
                  </h4>
                  <ul
                    className={` grid grid-cols-4 grid-rows-3 my-3 ${project.titleColor} font-semibold text-xl`}
                  >
                    {project.stack.map((stack, index) => {
                      return (
                        <li
                          key={index}
                          className={`flex items-center my-2 ${project.textColor}`}
                        >
                          <div
                            className={`w-2 h-2 bg-gradient-to-r rounded-full mr-3 flex-shrink-0 ${project.borderColor}`}
                          ></div>
                          <span className='text-sm font-medium'>{stack}</span>
                        </li>
                      )
                    })}
                  </ul>

                  <div className='flex flex-row gap-10'>
                    <div className='w-20 h-20 br-gradient-to-r rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg'>
                      <FaExternalLinkAlt
                        className={`group-hover:/btn:translate-x-1 transition-all duration-300 ${project.textColor}`}
                        size={28}
                      />
                      <a
                        href={project.demo}
                        target='_blank'
                        rel='noopener noreferrer'
                      ></a>
                    </div>
                    <button className='w-20 h-20 br-gradient-to-r rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg'>
                      <FaGithub
                        className={`group-hover:/btn:translate-x-1 transition-all duration-300 ${project.textColor}`}
                        size={32}
                      />
                      <a
                        href={project.github}
                        target='_blank'
                        rel='noopener noreferrer'
                      ></a>
                    </button>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
