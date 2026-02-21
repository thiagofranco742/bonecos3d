import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline';
    fullWidth?: boolean;
    children: React.ReactNode;
    href?: string;
}

const Button: React.FC<ButtonProps> = ({ 
    variant = 'primary', 
    fullWidth = false, 
    children, 
    className = '',
    href,
    ...props 
}) => {
    const baseStyles = "inline-flex items-center justify-center px-8 py-4 text-lg font-bold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg active:scale-95 focus:outline-none focus:ring-2 focus:ring-offset-2";
    
    const variants = {
        primary: "bg-brand-yellow hover:bg-yellow-500 text-gray-900 shadow-brand-yellow/30 focus:ring-brand-yellow !bg-[#ffbd00]",
        secondary: "bg-brand-emerald hover:bg-emerald-600 text-white shadow-brand-emerald/30 focus:ring-brand-emerald",
        outline: "bg-transparent border-2 border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white"
    };
    
    const combinedClasses = `${baseStyles} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`;

    if (href) {
        return (
            <a href={href} className={combinedClasses} {...(props as any)}>
                {children}
            </a>
        );
    }

    return (
        <button 
            className={combinedClasses}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;