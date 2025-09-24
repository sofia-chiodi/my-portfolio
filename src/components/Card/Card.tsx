import React from 'react'

import {
  SiJavascript,
  SiReact,
  SiTypescript,
  SiNodedotjs,
  SiRedux,
  SiCss3,
  SiTailwindcss,
  SiHtml5,
  SiStyledcomponents,
  SiGit,
  SiJest,
  SiVite,
  SiJira,
  SiFigma,
} from 'react-icons/si'
import { PiBracketsCurly, PiFileSql } from 'react-icons/pi'

const skillIcons = {
  SiJavascript,
  SiReact,
  SiTypescript,
  SiNodedotjs,
  SiRedux,
  PiBracketsCurly,
  SiCss3,
  SiTailwindcss,
  SiHtml5,
  SiStyledcomponents,
  SiGit,
  PiFileSql,
  SiJest,
  SiVite,
  SiJira,
  SiFigma,
}

type Skill = { title: string; description: string; icon: string }

export const Card = ({ title, icon }: Skill) => {
  const SkillIcon = skillIcons[icon]

  return (
    <div>
      <div className='group bg-white/80 p-10 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 rounded-2xl border border-gray-100 relative overflow-hidden h-50'>
        <div className='absolute top-0 right-0 w-26 h-26 rounded-full bg-gradient-to-br from-purple-200 to-pink-200 -translate-y-10 translate-x-10 group-hover:scale-130 duration-300'></div>
        <div className='relative z-10 h-full flex flex-col'>
          <div
            className={`w-16 h-16 bg-gradient-to-r rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}
          >
            {SkillIcon ? (
              <SkillIcon className='text-pink-200' size={45} />
            ) : null}
          </div>
          <h3 className='text-violet-300/80 mb-4 relative z-10 leading-tight font-semibold '>
            {title}
          </h3>
        </div>
      </div>
    </div>
  )
}
