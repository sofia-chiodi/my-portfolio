import { IoLogoGithub, IoLogoLinkedin, IoIosMail } from 'react-icons/io'

const Icon = {
  IoLogoGithub,
  IoLogoLinkedin,
  IoIosMail,
}

const contactLinks = [
  {
    title: 'Email',
    icon: Icon.IoIosMail,
    url: 'mailto:chiodi.sb@gmail.com',
    description: 'chiodi.sb@gmail.com',
    bgColor: 'bg-pink-200/70',
    homeBgColor: 'bg-pink-300/40',
  },
  {
    title: 'LinkedIn',
    icon: Icon.IoLogoLinkedin,
    url: 'https://www.linkedin.com/in/sb-chiodi/',
    description: 'in/sb-chiodi',
    bgColor: 'bg-blue-200/70',
    homeBgColor: 'bg-blue-300/40',
  },
  {
    title: 'Github',
    icon: Icon.IoLogoGithub,
    url: 'https://github.com/sofia-chiodi',
    description: '/sofia-chiodi',
    bgColor: 'bg-zinc-200/70',
    homeBgColor: 'bg-zinc-300/40',
  },
]

export default contactLinks
