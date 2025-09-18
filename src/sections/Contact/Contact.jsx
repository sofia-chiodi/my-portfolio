export const Contact = () => {
  return (
    <section
      id='contact'
      className='min-h-screen py-32 relative overflow-hidden'
    >
      {/* Background */}
      <div className='absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-violet-100 to-pink-100 rounded-full filter blur-3xl opacity-50 -translate-y-48'></div>
      <div className='absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-l from-pink-100 to-violet-100 rounded-full filter blur-3xl opacity-50 translate-y-48'></div>

      <div className='max-w-7xl mx-auto py-4 px-10 md:px-20 lg:px-10 relative z-10'>
        <div className='text-center mb-16'>
          <div className='inline-flex items-center px-8 py-4 bg-gradient-to-r from-pink-200 to-purple-200 rounded-full mb-8 font-bold'>
            <span>Contact Me</span>
          </div>
        </div>
      </div>
    </section>
  )
}
