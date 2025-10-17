import { useEffect, useState, type JSX } from "react";
import { navLinks } from "../Data"; 
import { Menu, X } from "lucide-react";


const Header: React.FC = (): JSX.Element => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            const isCurrentMobile = window.innerWidth <= 768;
            setIsMobile(isCurrentMobile);
            if (!isCurrentMobile) {
                setIsMenuOpen(false);
            }
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(prev => !prev);
    };

    const mobileMenu = () => {
        return (
            <div className="fixed top-0 left-0 w-full h-full bg-white z-50 shadow-xl"> 
                <div className="flex justify-between items-center mb-4 bg-offwhite w-full p-6">
                    <a className="text-[24px]" href="#" onClick={toggleMenu}>Riad Ventures</a>
                    <X className="h-6 w-6 cursor-pointer" onClick={toggleMenu} />
                </div>

                <ul className="flex flex-col gap-4 p-6"> 
                    {navLinks.map((link, index) => (
                        <li key={index} className="border-b border-gray-100 pb-2">
                            <a 
                                href={`#${link.id}`} 
                                className="text-lg font-semibold block py-2 text-gray-800 hover:text-primary"
                                onClick={toggleMenu} 
                            >
                                {link.title}
                            </a>
                        </li>
                    ))}
                     <li>
                        <a 
                            href="#contactme" 
                            className="block mt-4 px-[15px] py-[10px] rounded-lg bg-primary text-base text-white text-center hover:bg-primary/90"
                            onClick={toggleMenu}
                        >
                            Contact Me
                        </a>
                    </li>
                </ul>
            </div>
        )
    }

    return (
        <header className="w-[100%] flex items-center justify-center h-auto min-h-[60px] px-[20px] bg-white sticky top-0 z-40 shadow-[0px_0px_8px_0px_rgba(0,0,0,0.1)]">
            <div className={`w-full max-w-screen-lg h-auto flex items-center justify-between py-[20px]`}>
                <a className="text-[24px]" href="#">Riad Ventures</a>
                {isMobile ? (
                   <Menu className="h-6 w-6 cursor-pointer" onClick={toggleMenu} />
                ) : (
                    // Desktop Navigation
                    <nav className="flex gap-6 items-center">
                        <ul className="flex gap-6">
                            {navLinks.map((link, index) => (
                                <li key={index}>
                                    <a href={`#${link.id}`} className="text-sm font-semibold text-primary hover:text-black">{link.title}</a>
                                </li>
                            ))}
                        </ul>
                        <a href="#contactme" className="px-[15px] py-[10px] rounded-lg bg-primary text-sm text-white hover:bg-primary/90">Contact Me</a>
                    </nav>
                )}
            </div>
            {isMobile && isMenuOpen && mobileMenu()}

        </header>
    );
};

export default Header;