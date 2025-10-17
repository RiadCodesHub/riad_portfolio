import React from 'react'

const About : React.FC = () => {
  return (
    <div id="about" className='w-full h-full bg-white px-[20px] pt-[60px] md:pt-[80px] md:px-[60px] flex flex-col items-center justify-center'>
      <div className='w-full flex flex-col items-center justify-center gap-[16px]'>
        <h3>About Me</h3>
        <p className='text-small text-primary text-center'>Explore more about my journey, skills  and passion for creating digital experiences</p>
      </div>
      <div className='mt-[60px] md:mt-[80px] flex flex-col  md:flex-row items-center justify-center gap-[40px] md:gap-[60px] max-w-screen-lg'>
      <div className='md:w-1/2 flex flex-col gap-[30px]'>
        <p className='text-small text-wrap'>I’m an enthusiastic UI/UX designer and frontend developer with a strong focus on creating clean, responsive, and user-friendly digital experiences. My journey started with curiosity about how websites and interfaces work, and it has grown into a deep passion for designing and building products that make life easier and more enjoyable.</p>
        <p className='text-small text-wrap'>I specialize in modern frontend tools like React and enjoy transforming ideas into interactive, visually appealing interfaces. Through continuous learning, practice projects, and exploring design systems, I’ve developed a keen eye for usability, accessibility, and design consistency.</p>
        <div className='flex items-start mt-[20px] md:mt-[30px] justify-start mb-[20px] gap-[60px]'>
          <div className='flex flex-col gap-[20px]'>
          <p className='font-semibold text-base text-primary'>Frontend</p>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>Tailwind CSS</li>
            <li>Type Script</li> 
            <li>React</li>
          </ul>
          </div>
          <div className='flex flex-col gap-[20px]'>
          <p className='font-semibold text-base text-primary'>Design Tools</p>
          <ul>
            <li>Figma</li>
            <li>Adobe Illustator</li>
            <li>Adobe Photoshop</li>
            <li>Canva</li>
          </ul>
          </div>
        </div>
      </div>

      <div className='md:w-1/2 w-full flex bg-yellow-500 rounded-[200px_10px_10px_10px] '>
        <img src="./author-profile.png" alt="Author_profile" className='w-full h-[550px] object-cover ' />
      </div>
      </div>
    </div>
  )
}

export default About