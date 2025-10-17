import { Facebook, Linkedin, Mail, Send, Phone, MapPin } from 'lucide-react'
import React from 'react'

const ContactPage : React.FC = () => {
  return (
    <div id='contactme' className='w-full h-full flex flex-col bg-offwhite  items-center justify-center'>
      <div className='w-full max-w-screen-lg px-[20px] py-[80px] flex flex-col gap-[40px] md:gap-[60px] '>
        <div className='w-full flex flex-col items-center justify-center gap-[16px]'>
        <h3>Get In Touch</h3>
        <p className='text-small text-primary text-center'>Ready to start your next project? I'd love to hear about your ideas and discuss how we can work together.</p>
      </div>
         
         <form action="" className='bg-white md:p-[60px] p-[30px] rounded-lg flex flex-col gap-[40px] w-full max-w-screen-lg  '>
          <span className='flex flex-col gap-[8px]'>
          <p className='text-lg'>Send me a massage</p>
          <p className='text-small'>Fill out the form below and I'll get back to you as soon as possible.</p>
          </span>

          <div className='flex flex-col gap-[30px]'>
         <span className='flex flex-col w-full md:flex-row gap-[40px]'>
          <label htmlFor="name" className='flex flex-col gap-[10px] w-full'>Name
            <input type="text" id='name' placeholder='Write your name' className='bg-offwhite rounded-lg w-full text-base px-[14px] py-[10px] outline-0 focus:outline-none' required />
          </label>
          <label htmlFor="email" className='flex flex-col gap-[10px] w-full'>Email
            <input type="email" id='email' placeholder='Your email' className='bg-offwhite rounded-lg w-full text-base px-[14px] py-[10px] outline-0 focus:outline-none' required />
          </label>
         </span>

         <label htmlFor="subject" className='flex flex-col gap-[10px] w-full'>Subject
            <input type="text" id='subject' placeholder="What's all about" className='bg-offwhite rounded-lg w-full text-base px-[14px] py-[10px] outline-0 focus:outline-none' required/>
          </label>
         <label htmlFor="message" className='flex flex-col gap-[10px] w-full'>message
            <textarea id='message' className='bg-offwhite rounded-lg w-full text-base px-[14px] py-[10px] outline-0 focus:outline-none' placeholder='Write your message ' required />
          </label>
         
         <button className="bg-primary hover:bg-primary/95 flex items-center justify-center gap-[20px] w-full py-[10px] text-small text-white rounded-lg">
         <Send size={20}/> Send your message
         </button>
         </div>
         </form>

    <div className='flex flex-col gap-[40px]'>
     <div className='flex flex-col gap-[20px] rounded-lg'>
      <h5>Contact Information</h5>
       <div className='flex flex-col gap-[20px]'>
        <span className='flex items-center gap-[20px]'>
        <span className='bg-white text-primary hover:bg-white/50 flex items-center justify-center rounded-lg w-fit h-fit p-[15px]'><Mail size={25}/></span>
        <span className='flex flex-col gap-[4px]'>
          <p className='text-small font-semibold'>Email</p>
          <p className='text-small'>riad75599@gmail.com</p>
        </span>
        </span>
        <span className='flex items-center gap-[20px]'>
        <span className='bg-white text-primary hover:bg-white/50 flex items-center justify-center rounded-lg w-fit h-fit p-[15px]'><Phone  size={25}/></span>
        <span className='flex flex-col gap-[4px]'>
          <p className='text-small font-semibold'>Phone</p>
          <p className='text-small'>01778017982</p>
        </span>
        </span>
        <span className='flex items-center gap-[20px]'>
        <span className='bg-white text-primary hover:bg-white/50 flex items-center justify-center rounded-lg w-fit h-fit p-[15px]'><MapPin size={25}/></span>
        <span className='flex flex-col gap-[4px]'>
          <p className='text-small font-semibold'>Location</p>
          <p className='text-small'>Khilbarirtek, Vatara, Dhaka</p>
        </span>
        </span>
       </div>
    </div>

    <div className='flex flex-col gap-[20px] rounded-lg'>
      <h5>Follow me</h5>
       <div className='flex gap-[20px]'>
        <a href="https://www.facebook.com/riad.21" className='bg-white text-primary hover:bg-white/50 flex items-center justify-center rounded-lg w-fit h-fit p-[15px]'><Facebook   size={25}/></a>
        <a href="https://www.linkedin.com/in/riad-azad/" className='bg-white text-primary hover:bg-white/50 flex items-center justify-center rounded-lg w-fit h-fit p-[15px]'><Linkedin   size={25}/></a>
       </div>
    </div>
    <div className='bg-white flex flex-col p-[20px] gap-[20px] rounded-lg md:p-[40px]'>
      <h5>Let's Work Together</h5>
      <p>I'm always excited to take on new challenges and collaborate on interesting projects. Whether you need a complete website, a mobile app, or just want to discuss an idea, don't hesitate to reach out.</p>
    </div>
    </div>
   </div>
    </div>
  )
}

export default ContactPage