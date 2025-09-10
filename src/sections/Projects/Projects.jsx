export const Projects = () => {
  return (
    <section id='projects' className='py-20 bg-white relative overflow-hidden'>
      {/* Background */}
      <div className='absolute inset-0 opacity-25'>
        <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-r from-pink-300 to-violet-600 transform rotate-12 scale-150'></div>
      </div>

      {/* Content */}
      <div className='max-w-7xl mx-auto py-4 sm:px-6 lg:px-8 relative z-10'>
        <div className='text-center mb-16'>
          <div className='inline-flex items-center px-4 py-4 bg-gradient-to-r from-violet-300 to-pink-100 rounded-full mb-8'>
            <span>My projects</span>
          </div>
        </div>
      </div>
    </section>
  )
}
