import { User } from 'lucide-react'

export const About = () => {
  return (
    <section id="about">
      <div className="py-20 bg-gradient-to-r from-gray-50 to-white relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-violet-300 to-pink-600 transform rotate-12 scale-150"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full mb-6">
              <span>About me</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-700 mb-6">
              I'm a <span>front-end developer</span> from Buenos Aires,
              Argentina, who loves creating innovative and intuitive experiences
              for users.
            </h2>

            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              I've created this portfolio as a fun way to showcase some of my
              skills regarding React.js, cool animations &responsive styling
              with Tailwind CSS.
            </p>
          </div>

          {/* Stack */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-25 h-25 bg-gradient-to-br from-purple-200 to-pink-200 rounded-full -translate-y-10 translate-x-10 group-hover:scale-150 duration-500"></div>

              <div className="relative z-10 h-full flex flex-col">
                <div
                  className={`w-16 h-16 bg-gradient-to-r rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}
                >
                  <User className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-700 mb-4 relative z-10">
                  Title
                </h3>
                <p className="text-gray-600 leading-relaxed relative z-10">
                  Description
                </p>
              </div>
            </div>

            {/* Contact */}
          </div>
        </div>
      </div>
    </section>
  )
}
