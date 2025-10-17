import React from 'react'
import type { LucideIcon } from 'lucide-react'
import  Card  from '../components/Card'
import { Palette, ChevronsLeftRight, Smartphone, Globe } from 'lucide-react'

interface serviceData {
  id: number;
  icon : LucideIcon;
  title: string;
  description: string
}

const cardData : serviceData[] = [
    {id: 1, icon: Palette , title: "UI/UX Design", description: "Creating intuitive and visually appealing user interfaces with a focus on user experience and modern design principles." },
    {id: 2, icon: ChevronsLeftRight , title: "Web Development", description: "Building responsive, fast, and scalable web applications using React, TypeScript, and modern frontend technologies."},
    {id: 3, icon: Smartphone , title: "Mobile First Design", description: "Designing and developing mobile-first responsive applications that work seamlessly across all devices."},
    {id: 4, icon: Globe , title: "Performance Optimization", description: "Optimizing web applications for speed, accessibility, and search engine optimization to ensure the best user experience."}
]

const Services : React.FC = () => {
  return (
    <div id='services' className='w-full h-full flex flex-col items-center justify-center px-[20px] py-[60px] md:px-[96px] md:py-[80px] bg-offwhite'>
        <div className='w-full flex flex-col items-center justify-center gap-[16px]'>
        <h3>Services</h3>
        <p className='text-small text-primary text-center'>I offer a comprehensive range of services to help bring your digital ideas to life</p>
      </div>
          <ul className='max-w-screen-md grid gap-[20px] md:gap-[40px] grid-cols-1  sm:grid-cols-2 mt-[40px] md:mt-[60px]'>
          {cardData.map((card) => 
          <li key={card.id} className='w-full max-w-[500px] shadow-2xl'>
          <Card  
               id={String(card.id)} 
               icon={card.icon}
               title={card.title} 
               des={card.description} />
          </li>)
          }
          </ul>
    </div>
  )
}


export default Services
