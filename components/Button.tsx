import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'cyan' | 'purple' | 'neutral';
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'cyan', 
  fullWidth = false,
  className = '',
  ...props 
}) => {
  const baseStyles = "relative overflow-hidden px-8 py-4 rounded-xl font-poppins font-bold text-lg transition-all duration-300 transform active:scale-95 focus:outline-none";
  
  const variants = {
    cyan: "bg-transparent border-2 border-neon-cyan text-neon-cyan hover:bg-neon-cyan hover:text-black shadow-[0_0_15px_rgba(0,229,255,0.3)] hover:shadow-[0_0_25px_rgba(0,229,255,0.6)]",
    purple: "bg-transparent border-2 border-neon-purple text-neon-purple hover:bg-neon-purple hover:text-white shadow-[0_0_15px_rgba(213,0,249,0.3)] hover:shadow-[0_0_25px_rgba(213,0,249,0.6)]",
    neutral: "bg-gray-800 text-gray-300 border-2 border-gray-700 hover:border-gray-500 hover:text-white"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
      {...props}
    >
      <span className="relative z-10">{children}</span>
    </button>
  );
};
