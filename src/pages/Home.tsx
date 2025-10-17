import React from 'react'
import { Button } from '../Data'
import { Linkedin, Github, Mail, ArrowDown, Download, Send } from 'lucide-react';

const Home : React.FC = () => {


    const handleContact = () => {
        const link = document.createElement('a');
        link.href = "#contactme";

        const targetElement = document.getElementById("contactme");
        if(targetElement) {
            targetElement.scrollIntoView({behavior: 'smooth'})
        }
    }

    const downloadCv = () => {
        const link = document.createElement('a')
        link.href = "./riad_cv.pdf";
        link.download = "./riad_cv.pdf";
        document.body.appendChild(link)
        link.click();
        document.body.removeChild(link)
    }

    const handleScroll : () => void = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="bg-offwhite h-[100%] text-center py-[60px] px-[20px] md:px-[96px] md:py-[96px] ">
        <div className="max-w-3xl flex flex-col justify-center items-center gap-[40px] mx-auto">
        <div className='flex flex-col gap-[20px]'>
            <h2 className="text-xl md:text-2xl font-heading text-primary font-medium">
                Hello, I am Riad
            </h2>
            <h3 className="font-heading text-primary leading-tight">
                UI-UX designer & frontend developer
            </h3>
            <p className="text-base text-secondary max-w-2xl mx-auto">
                A professional and highly talented individual with years of experience in both digital and physical design and development.
            </p>
        </div>     
            <div className="flex flex-col md:flex-row items-center justify-center gap-[30px]">
                <Button onClick={downloadCv} className='md:p-[15px_40px] p-[10px_30px] bg-primary text-white hover:bg-primary/95 flex gap-2'><Download /> Download Cv</Button>
                <Button onClick={handleContact} className='md:p-[15px_40px] p-[10px_30px] border hover:shadow-[inset_0_0_8px_rgba(0,0,0,0.5)] flex gap-2 text-center'><Send /> Send a Message</Button>
            </div>

        <div className='flex gap-[40px] items-center justify-center'>
        <a target='_blank' href="https://github.com/RiadCodesHub" className='bg-white text-primary hover:bg-white/50 flex items-center justify-center rounded-full w-fit h-fit p-[15px]'><Github size={25}/></a>
        <a target='_blank' href="https://www.linkedin.com/in/riad-azad/" className='bg-white text-primary hover:bg-white/50 flex items-center justify-center rounded-full w-fit h-fit p-[15px]'><Linkedin size={25}/></a>
        <a target='_blank' href="https://mail.google.com/" className='bg-white text-primary hover:bg-white/50 flex items-center justify-center rounded-full w-fit h-fit p-[15px]'><Mail size={25}/></a>
        </div>
       <button onClick={handleScroll} className='flex items-center justify-center bg-white p-4 rounded-full w-fit h-fit text-primary'>
        <ArrowDown size={25} strokeWidth={3} className='animate-bounce' />
       </button>

        </div>
        
    </section>
);
  
}

export default Home