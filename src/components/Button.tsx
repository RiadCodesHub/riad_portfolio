import type{ JSX } from "react"

const Button: React.FC<ButtonProps> = ({className, children, onClick}) : JSX.Element => {
  return (
    <button onClick={onClick} className={`${className} rounded-[10px]`}>
        {children}
    </button>
  )
}

interface ButtonProps {
    className: string;
    children: React.ReactNode 
    onClick : any;
}

export default Button