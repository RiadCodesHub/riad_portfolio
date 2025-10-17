import { Facebook, Github, Linkedin, Mail } from "lucide-react"

const Footer = () => {
  return (
    <div className="px-[40px] py-[60px] md:px-[60px] bg-[#000412] flex flex-col items-center justify-center text-white ">
  <div className="max-w-screen-lg w-full flex flex-col md:flex-row items-start justify-between gap-[60px] md:gap-0">
     <div className="w-full md:w-1/3 flex flex-col gap-[20px] md:gap-[30px]">
      <p className="text-xl">Riad Ventures</p>
      <div className="flex flex-col gap-[30px]">
      <p className="text-sm  ">UI-UX & Frontend developer passionate about creating beautiful, functional digital experiences that make a difference.</p>
      <div className="flex items-center gap-[20px]">
        <a href="https://github.com/RiadCodesHub"><Github size={20} /></a>
        <a href="https://www.facebook.com/riad.21"><Facebook size={20}/></a>
        <a href="https://www.linkedin.com/in/riad-azad/"><Linkedin size={20}/></a>
        <a href="https://mail.google.com/"><Mail size={20}/></a>
      </div>
     </div>
     </div>

     <div className="flex flex-col gap-[20px] md:gap-[30px]">
      <p className="text-large">Quick Links</p>
      <span className="flex flex-col gap-[15px] md:gap-[20px]">
        <a href="#home" className="text-small">Home</a>
        <a href="#about" className="text-small">About Me</a>
        <a href="#services" className="text-small">Services</a>
        <a href="#projects" className="text-small">Projects</a>
        <a href="#contactme" className="text-small">Contact Me</a>
      </span>
     </div>

     <div className="flex flex-col gap-[20px] md:gap-[30px]">
      <p className="text-large">Quick Links</p>
      <span className="flex flex-col gap-[15px] md:gap-[20px]">
        <p className="text-small">riad75599@gmail.com</p>
        <p className="text-small">01778017982</p>
        <p className="text-small">Khilbarirtek, Vatara, Dhaka</p>
      </span>
     </div>
  </div>

    <p className="border-t-1 w-full max-w-screen-lg mt-[40px] pt-[20px]">&copy; {new Date().getFullYear()} All rights Reserve</p>
    </div>
  )
}

export default Footer