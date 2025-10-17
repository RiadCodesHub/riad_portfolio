import React from 'react';
interface ProjectCardProps {
    image: string;
    title: string;
    description: string;
    tags: string[];
    button: React.ReactNode;
}
const ProjectCards: React.FC<ProjectCardProps> = ({ image, title, description, tags, button }) => {
  return (
    <div className='flex flex-col bg-white w-full max-w-[450px] h-full max-h-[550px] shadow-2xl rounded-lg overflow-hidden'>
        <img src={image} alt={title} className='w-full h-[250px] object-cover' />
      <div className='px-[12px] py-[20px] flex flex-col gap-[15px]'>
        <p className='text-large md:text-xl'>{title}</p>
        <p className='text-small'>{description}</p>
         <ul className='flex gap-4 my-2'> 
            {tags.map((tag, index) => (
                <li key={index} className='bg-offwhite text-sm px-2 py-1 rounded-sm'>
                    {tag}
                </li>
            ))}
        </ul>
        <div>{button}</div>
      </div>
    </div>
  );
}

export default ProjectCards;