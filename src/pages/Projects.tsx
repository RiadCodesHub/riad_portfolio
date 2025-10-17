import React from 'react';
import ProjectCards from '../components/ProjectCards';
import { ChevronsLeftRight, Palette } from 'lucide-react';

interface ProjectDataProps {
  id: number;
  image: string;
  title: string;
  description: string;
  tags: string[];
  buttonIcon: any;
  buttonText: string;
  link : string
}

const projectData: ProjectDataProps[] = [
  {id: 1, 
   image: "./src/assets/movie_search_app.png",
   title: "Movie Search App",
   description: "movie search application built with React and OMDb API, where users can search movies by title, view details, and navigate seamlessly between pages.",
   tags: ["React", "Tailwindcss", "Omdb Api"],
   buttonIcon: ChevronsLeftRight,
   buttonText: "Code",
   link: "https://github.com/RiadCodesHub/omdb-movie-app"
  },

  { id: 2, 
   image: "./src/assets/user_deshboard.png",
   title: "User Deshboard",
   description: "Crafting a Modern Dashboard with React, Tailwind CSS, and HTML Description:In my latest project, I designed a sleek and fully responsive dashboard using React, Tailwind",
   tags: ["React", "Tailwindcss"],
   buttonIcon: ChevronsLeftRight,
   buttonText: "Code",
   link : "https://github.com/RiadCodesHub/user-deshboard"
},

  { id: 3, 
   image: "./src/assets/todo_app.png",
   title: "Todo App",
   description: "A task manager built with React and Tailwind CSS, using Local Storage to save tasks for a seamless user experience.",
   tags: ["React", "Tailwindcss"],
   buttonIcon: ChevronsLeftRight,
   buttonText: "Code",
   link: "https://github.com/RiadCodesHub/random-password-generator-and-todo-app"},

  { id: 4, 
   image: "./src/assets/zose_template.png",
   title: "Zose Landing page Template",
   description: "Landing page design inspired by the Zose CCTV template, created in Figma with a modern layout, clean typography, and smooth visual hierarchy.",
   tags: ["Figma"],
   buttonIcon: Palette,
   buttonText: "Design",
   link:"https://www.figma.com/design/GjselmJx0TBWfqLDjqKauA/Untitled?node-id=0-1&t=nhs1LpUfRPFXpa0V-1"}
];

const Projects : React.FC = () => {
  return (
    <div id='projects' className='w-full h-full flex flex-col items-center justify-center px-[20px] py-[60px] md:px-[96px] md:py-[80px] bg-white'>
      <div className='w-full flex flex-col items-center justify-center gap-[16px]'>
        <h3>Featured Projects</h3>
        <p className='text-small text-primary text-center'>A showcase of my recent work, demonstrating various technologies and solutions</p>
      </div>
      <ul className='max-w-screen-lg grid gap-[40px] grid-cols-1 md:grid-cols-2 mt-[40px] md:mt-[60px]'>
          {projectData.map((project) => 
          <li key={project.id}> 
            <ProjectCards
              image={project.image}
              title={project.title}
              description={project.description}
              tags={project.tags} 
              button={
               <a href={project.link}
                  target='_blank'
                  rel='noopener norefferer' >
                <button className='bg-primary text-small text-white px-[12px] py-[8px] flex items-center hover:bg-primary/90 rounded-lg'>
                  <project.buttonIcon className='w-[20px] h-auto mr-2' /> 
                  {project.buttonText}
                </button>
                </a>
              }
            />
          </li>
        )}
      </ul>
    </div>
  );
}

export default Projects;