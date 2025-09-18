import { FaGithub } from 'react-icons/fa'

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
          <div className='inline-flex px-8 py-4 bg-gradient-to-r from-pink-200 to-purple-200 text-3xl rounded-full mb-8 font-bold'>
            <span className='animate-pulse text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-violet-300'>
              ✨ Contact me ✨
            </span>
          </div>
          <h2 className='mt-8 text-2xl md:text-3xl lg:text-4xl font-bold text-violet-300 mb-6 leading-tight'>
            Check out my{' '}
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-violet-300 via-pink-300 to-violet-300'>
              social links{' '}
            </span>
            here:
          </h2>

          <div className='grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16'>
            <div className='group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 text-center'>
              <div
                className={`w-16 h-16 bg-gradient-to-r rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-all duration-300`}
              >
                <FaGithub className='text-violet-300' size={24} />
              </div>
              <h3 className='text-lg font-bold text-gray-700 mb-2'>Title</h3>
              <p className='text-sm text-gray-500 mb-3'>Description</p>

              <div className='space-y-2'>
                <p className='text-sm font-medium text-gray-700 '>Details</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
