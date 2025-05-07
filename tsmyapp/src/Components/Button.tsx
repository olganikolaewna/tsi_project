import React from 'react';

interface ButtonProps {
    children: React.ReactNode;
    type?: "button" | "submit" | "reset";
    onClick?: () => void; // Сделать onClick необязательным
    className?: string;
}

const Button: React.FC<ButtonProps> = ({ onClick, children, className = '', type = 'button' }) => {
    return (
        <button 
            onClick={onClick} 
            type={type} // Устанавливаем тип кнопки
            className={`bg-pink-300 hover:bg-pink-400 text-black 
                px-4 py-2 rounded-full ${className}`}
        >
            {children}
        </button>
    );
};

export default Button;
