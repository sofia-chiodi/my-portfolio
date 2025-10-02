import { useState } from 'react'
import { FaGithub, FaExternalLinkAlt, FaArrowRight } from 'react-icons/fa'
import projectList from '@/utils/projectList'
import projectFilters from '@/utils/projectFilters'
import { SectionTitle } from '../../components/SectionTitle/SectionTitle'

export const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all')

  const filteredProjects =
    activeFilter === 'all'
      ? projectList
      : projectList.filter((project) => project.category.includes(activeFilter))

  return (
    <section
      id='portfolio'
      className='min-h-screen py-32 bg-gradient-to-r from-gray-50 to-white relative overflow-hidden'
    >
      {/* Background */}
      <div className='absolute top-0 right-0 w-96 h-96 bg-gradient-to-l from-violet-200 to-transparent rounded-full translate-x-48'></div>
      <div className='absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-l from-pink-200 to-transparent rounded-full translate-y-48'></div>

      <div className='max-w-7xl mx-auto py-2 md:py-4 lg:py-6 px-4 md:px-6 lg:px-10 relative z-10'>
        <div className='text-center'>
          <SectionTitle>✨ Portfolio ✨</SectionTitle>

          <h2 className='text-lg md:text-2xl lg:text-3xl font-bold text-violet-300 mb-6 lg:mb-12 leading-tight'>
            Here are some of the{' '}
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-violet-300 via-pink-300 to-violet-300'>
              projects{' '}
            </span>
            that I've worked on:
          </h2>
        </div>

        {/* Filter */}
        <div className='flex flex-wrap justify-center gap-2 md:gap-4 mb-4 md:mb-6 lg:mb-12'>
          {projectFilters.map((filter) => {
            return (
              <button
                onClick={() => setActiveFilter(filter.id)}
                key={filter.id}
                className={`px-2 md:px-6 py-2 md:py-3 rounded-3xl text-xs md:text-sm lg:text-base font-semibold transition-all duration-100 ${
                  activeFilter === filter.id
                    ? 'bg-gradient-to-r from-violet-200 to-pink-200 text-white shadow-lg scale-105'
                    : 'bg-transparent text-gray-400 hover:bg-pink-50 border border-gray-200 hover:border-pink-100'
                }`}
              >
                {filter.label}
              </button>
            )
          })}
        </div>

        {/* Projects */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
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
                    className='w-full h-72 object-cover group-hover:scale-110 transition-all duration-500'
                  />

                  <div className='absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-200'>
                    <div className='absolute bottom-4 left-4 right-4 flex justify-between items-end'>
                      <div className='flex space-x-3'>
                        <div className='flex items-center space-x-1 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 hover:scale-110 transition-all duration-100'>
                          <a
                            href={project.demoUrl}
                            target='_blank'
                            rel='noopener noreferrer'
                            className='flex items-center space-x-1'
                          >
                            <FaExternalLinkAlt
                              className='text-violet-300'
                              size={14}
                            />
                            <span className='text-white text-xs font-medium'>
                              Demo
                            </span>
                          </a>
                        </div>

                        <div className='flex items-center space-x-1 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 hover:scale-110 transition-all duration-300'>
                          <a
                            href={project.githubUrl}
                            target='_blank'
                            className='flex items-center space-x-1'
                            rel='noopener noreferrer'
                          >
                            <FaGithub className='text-violet-300' size={16} />
                            <span className='text-white text-xs font-medium'>
                              Repository
                            </span>
                          </a>
                        </div>
                      </div>

                      <button className='w-10 h-10 bg-gray-100/30 backdrop-blur-sm rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300'>
                        <a
                          href={project.githubUrl}
                          target='_blank'
                          rel='noopener noreferrer'
                        >
                          <FaExternalLinkAlt
                            className='text-gray-300'
                            size={18}
                          />
                        </a>
                      </button>
                    </div>
                  </div>
                </div>

                <div className='p-6'>
                  <div className='text-sm text-gray-300 font-semibold mb-2'>
                    {project.category}
                  </div>
                  <h3 className='text-xl font-bold text-violet-400/60 mb-3 group-hover:text-pink-300 transition-all duration-300'>
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
                          className='px-3 py-1 bg-gradient-to-r from-violet-50/50 to-violet-50 text-violet-300 text-xs font-medium rounded-full border border-violet-100'
                        >
                          {stack}
                        </span>
                      )
                    })}
                  </div>
                  <button className='group/btn inline-flex items-center text-violet-400 font-semibold hover:text-pink-400 transition-all duration-300'>
                    <a
                      href={project.githubUrl}
                      target='_blank'
                      className='flex flex-row items-center'
                      rel='noopener noreferrer'
                    >
                      View Project{' '}
                      <FaArrowRight
                        size={16}
                        className='ml-2 group-hover/btn:translate-x-1 transition-transform duration-300'
                      />
                    </a>
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
