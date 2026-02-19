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
        primary: "bg-brand-green hover:bg-brand-darkGreen text-white shadow-brand-green/30 focus:ring-brand-green",
        secondary: "bg-brand-orange hover:bg-orange-600 text-white shadow-brand-orange/30 focus:ring-brand-orange",
        outline: "bg-transparent border-2 border-brand-green text-brand-green hover:bg-brand-green hover:text-white"
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