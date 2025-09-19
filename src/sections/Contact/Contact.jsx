import { useState } from 'react'
import { showToast } from '@/utils/toastConfig'

import { IoIosSend } from 'react-icons/io'

import contactLinks from '@/utils/contactLinks'

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const [isSubmiting, setIsSubmiting] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()

    setIsSubmiting(true)

    setTimeout(() => {
      showToast('Message sent! Thank you for your contact'),
        setIsSubmiting(false)
    }, 1000)
  }

  const handleChange = (e) => {
    e.preventDefault()
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section
      id='contact'
      className='min-h-screen py-32 relative overflow-hidden'
    >
      {/* Background */}
      <div className='absolute top-0 w-96 h-96 bg-gradient-to-l from-pink-200 to-transparent rounded-full filter blur-xl opacity-60 -translate-y-48'></div>
      <div className='absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-l from-pink-200 to-violet-200 rounded-full filter blur-xl opacity-60 translate-y-48'></div>

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
        </div>

        <div className='grid grid-cols-3 gap-10 mb-16'>
          {contactLinks.map((link, linkIndex) => {
            return (
              <div
                className='group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 text-center'
                key={linkIndex}
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-r rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-all duration-300 ${link.bgColor}`}
                >
                  <link.icon className='text-white' size={24} />
                </div>
                <h3 className='text-lg font-bold text-gray-700 mb-2'>
                  {link.title}
                </h3>

                <p className='text-sm text-gray-500 mb-3'>
                  <a href={link.link} target='_blank' rel='noopener noreferrer'>
                    {link.description}
                  </a>
                </p>
              </div>
            )
          })}
        </div>
      </div>

      {/* Contact form */}
      <div className='max-w-7xl mx-auto py-4 px-10 md:px-20 lg:px-10 grid grid-cols-2 gap-12'>
        <div className='bg-white rounded-3xl shadow-xl p-8 border border-gray-100'>
          <div className='mb-8'>
            <h3 className='text-2xl font-bold text-violet-300 mb-2'>
              Get in touch!
            </h3>
            <p className='text-gray-600'>
              Fill out this form to send me a message 📩
            </p>
          </div>

          <form className='space-y-6' onSubmit={handleSubmit}>
            <div className='grid grid-cols-2 gap-6'>
              <div>
                <label
                  htmlFor='name'
                  className='block text-sm font-semibold text-gray-600 mb-2'
                >
                  Full Name <span className='text-pink-400'>*</span>
                </label>
                <input
                  type='text'
                  id='name'
                  name='name'
                  placeholder='Full name'
                  className='w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-violet-100 focus:border-transparent transition-all duration-300 bg-gray-50 focus:bg-white'
                  required
                  onChange={handleChange}
                />
              </div>
              <div>
                <label
                  htmlFor='email'
                  className='block text-sm font-semibold text-gray-600 mb-2'
                >
                  Email <span className='text-pink-400'>*</span>
                </label>
                <input
                  type='email'
                  id='email'
                  name='email'
                  placeholder='Email'
                  className='w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-violet-100 focus:border-transparent transition-all duration-300 bg-gray-50 focus:bg-white'
                  required
                  onChange={handleChange}
                />
              </div>
            </div>
            <div>
              <label
                htmlFor='message'
                className='block text-sm font-semibold text-gray-600 mb-2'
              >
                Message <span className='text-pink-400'>*</span>
              </label>
              <textarea
                id='message'
                name='message'
                placeholder='Message'
                className='w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-violet-100 focus:border-transparent transition-all duration-300 bg-gray-50 focus:bg-white'
                required
                onChange={handleChange}
              ></textarea>
            </div>

            <button
              className='w-fit px-6 py-3 font-semibold flex items-center justify-center bg-gradient-to-r from-violet-200 to-pink-200 text-white rounded-2xl shadow-lg hover:scale-105 transition-all duration-300 hover:shadow-md'
              disabled={isSubmiting}
            >
              {isSubmiting ? 'Sending...' : 'Send message'}
              <IoIosSend
                className='ml-2 hover:scale-110 transition-all duration-300'
                size={18}
              />
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
