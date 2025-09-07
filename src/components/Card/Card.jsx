import { User } from 'lucide-react'
import skillsList from './skillsList'

export const Card = () => {
  return (
    <div>
      <div className='group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 relative overflow-hidden'>
        <div className='absolute top-0 right-0 w-25 h-25 bg-gradient-to-br from-purple-200 to-pink-200 rounded-full -translate-y-10 translate-x-10 group-hover:scale-150 duration-500'></div>

        <div className='relative z-10 h-full flex flex-col'>
          <div
            className={`w-16 h-16 bg-gradient-to-r rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}
          >
            <User className='text-white' size={24} />
          </div>
          <h3 className='text-xl font-bold text-gray-700 mb-4 relative z-10'>
            {skillsList.map((skill) => skill.title)}
            Title
          </h3>
          <p className='text-gray-600 leading-relaxed relative z-10'>
            Description
          </p>
        </div>
      </div>
    </div>
  )
}
