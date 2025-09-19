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
    link: 'mailto:chiodi.sb@gmail.com',
    description: 'chiodi.sb@gmail.com',
    bgColor: 'bg-pink-200/70',
  },
  {
    title: 'LinkedIn',
    icon: Icon.IoLogoLinkedin,
    link: 'https://www.linkedin.com/in/sb-chiodi/',
    description: 'in/sb-chiodi',
    bgColor: 'bg-blue-200/70',
  },
  {
    title: 'Github',
    icon: Icon.IoLogoGithub,
    link: 'https://github.com/sofia-chiodi',
    description: '/sofia-chiodi',
    bgColor: 'bg-zinc-200/70',
  },
]

export default contactLinks
