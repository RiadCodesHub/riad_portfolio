import React from 'react'
import type{ LucideIcon } from 'lucide-react'

const Card : React.FC<cardProps> = ({id, icon: Icon, title, des}) => {
  return (
    <div id={id} className="w-full h-[250px] p-[40px] bg-white rounded-lg flex flex-col gap-[20px] text-center items-center justify-center">
    <span className='w-fit h-fit p-[10px] bg-offwhite rounded-lg'><Icon className='w-[30px] h-[30px]' /></span>
    <p className='text-xl'>{title}</p>
    <p className='text-small'>{des}</p>
    </div>
  )
}
 
interface cardProps {
    id: string;
    icon : LucideIcon;
    title : string;
    des : string;
}

export default Card