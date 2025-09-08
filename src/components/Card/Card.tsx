import React from 'react'

import { FaReact, FaNodeJs, FaGitAlt } from 'react-icons/fa'
import {
  SiJavascript,
  SiTypescript,
  SiRedux,
  SiTailwindcss,
  SiStyledcomponents,
  SiJest,
  SiVite,
  SiJira,
  SiFigma,
} from 'react-icons/si'
import { PiBracketsCurly, PiFileSql } from 'react-icons/pi'
import { IoLogoCss3 } from 'react-icons/io'
import { FaHtml5 } from 'react-icons/fa6'

const skillIcons = {
  SiJavascript,
  FaReact,
  SiTypescript,
  FaNodeJs,
  SiRedux,
  PiBracketsCurly,
  IoLogoCss3,
  SiTailwindcss,
  FaHtml5,
  SiStyledcomponents,
  FaGitAlt,
  PiFileSql,
  SiJest,
  SiVite,
  SiJira,
  SiFigma,
}

type CardTypes = { title: string; description: string; icon: string }

export const Card = ({ title, description, icon }: CardTypes) => {
  const SkillIcon = skillIcons[icon]

  return (
    <div>
      <div className='group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 relative overflow-hidden h-50'>
        <div className='absolute top-0 right-0 w-25 h-25 bg-gradient-to-br from-purple-200 to-pink-200 rounded-full -translate-y-10 translate-x-10 group-hover:scale-150 duration-500'></div>
        <div className='relative z-10 h-full flex flex-col'>
          <div
            className={`w-16 h-16 bg-gradient-to-r rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}
          >
            {SkillIcon ? (
              <SkillIcon className='text-violet-200' size={50} />
            ) : null}
          </div>
          <h3 className='text-xl font-semibold text-gray-700 mb-4 relative z-10'>
            {title}
          </h3>
          <p className='text-gray-600 leading-relaxed relative z-10'>
            {description}
          </p>
        </div>
      </div>
    </div>
  )
}
