import { useState } from 'react'
import { FaGithub, FaExternalLinkAlt, FaArrowRight } from 'react-icons/fa'
import projectList from '@/utils/projectList'
import projectFilters from '@/utils/projectFilters'

export const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all')

  const filteredProjects =
    activeFilter === 'all'
      ? projectList
      : projectList.filter((project) => project.type === activeFilter)

  return (
    <section
      id='portfolio'
      className='min-h-screen py-32 bg-gradient-to-r from-gray-50 to-white relative overflow-hidden'
    >
      {/* Background */}
      <div className='absolute top-1/4 left-0 w-72 h-72 bg-gradient-to-r from-violet-200 to pink-200 rounded-full filter blur-3xl opacity-30'></div>
      <div className='absolute bottom-1/4 right-0 w-72 h-72 bg-gradient-to-l from-indigo-200 to-magenta-200 rounded-full filter blur-3xl opacity-30'></div>

      <div className='max-w-7xl mx-auto py-4 px-10 md:px-20 lg:px-10 relative z-10'>
        <div className='text-center mb-16'>
          <div className='inline-flex px-8 py-4 bg-gradient-to-r from-pink-200 to-purple-200 text-3xl rounded-full mb-8 font-bold'>
            <span className='animate-pulse text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-violet-300'>
              ✨ Portfolio ✨
            </span>
          </div>

          <h2 className='mt-6 text-2xl md:text-3xl lg:text-4xl font-bold text-violet-300 mb-6 leading-tight'>
            Here are some of the{' '}
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-violet-200 to-pink-300'>
              projects
            </span>{' '}
            that I've worked on:
          </h2>
        </div>

        {/* Filter */}
        <div className='flex flex-wrap justify-center gap-4 mb-12'>
          {projectFilters.map((filter) => {
            return (
              <button
                onClick={() => setActiveFilter(filter.id)}
                key={filter.id}
                className={`px-6 py-3 rounded-3xl font-semibold transition-all duration-300 ${
                  activeFilter === filter.id
                    ? 'bg-gradient-to-r from-violet-200/50 to-pink-200/50'
                    : 'bg-transparent'
                }`}
              >
                {filter.label}
              </button>
            )
          })}
        </div>

        {/* Projects */}
        <div className='grid grid-cols-2 lg:grid-cols-3 gap-8'>
          {filteredProjects.map((project, projectIndex) => {
            return (
              <div
                className='group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100'
                key={projectIndex}
              >
                <div className='relative overflow-hidden'>
                  <img
                    src={project.image}
                    alt={project.title}
                    className='w-full h-64 object-cover group-hover:scale-110 transition-all duration-500'
                  />

                  <div className='absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-200'>
                    <div className='absolute bottom-4 left-4 right-4 flex justify-between items-end'>
                      <div className='flex space-x-2'>
                        <div className='flex items-center space-x-1 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1'>
                          <FaExternalLinkAlt
                            className='text-pink-200'
                            size={14}
                          />
                          <a href={project.demo}></a>
                          <span className='text-white text-xs font-medium'>
                            Demo
                          </span>
                        </div>

                        <div className='flex items-center space-x-1 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1'>
                          <FaGithub className='text-pink-200' size={18} />
                          <a href=''></a>
                          <span className='text-white text-xs font-medium'>
                            Repository
                          </span>
                        </div>
                      </div>

                      <button className='w-10 h-10 bg-white rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300'>
                        <FaExternalLinkAlt
                          className='text-gray-500'
                          size={18}
                        />
                      </button>
                    </div>
                  </div>
                </div>

                <div className='p-6'>
                  <div className='text-sm text-violet-400 font-semibold mb-2'>
                    {project.category}
                  </div>
                  <h3 className='text-xl font-bold text-gray-900 mb-3 group-hover:text-violet-300 transition-all duration-300'>
                    {project.title}
                  </h3>
                  <p className='text-gray-500 mb-4 leading-relaxed'>
                    {project.description}
                  </p>

                  <div className='flex flex-wrap gap-2 mb-4'>
                    {project.stack.map((stack, stackIndex) => {
                      return (
                        <span
                          key={stackIndex}
                          className='px-3 py-1 bg-gradient-to-r from violet-50 to-pink-50 text-violet-300 text-xs font-medium rounded-full border border-violet-100'
                        >
                          {stack}
                        </span>
                      )
                    })}
                  </div>

                  <button className='group/btn inline-flex items-center text-violet-400 font-semibold hover:text-pink-400 transition-all duration-300'>
                    View Project{' '}
                    <FaArrowRight
                      size={16}
                      className='ml-2 group-hover/btn:translate-x-1 transition-transform duration-300'
                    />
                  </button>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
