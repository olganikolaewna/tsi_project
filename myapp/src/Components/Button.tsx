// Button.tsx
import React from 'react';

interface ButtonProps {
    onClick: () => void; // Функция, вызываемая при нажатии кнопки
    children: React.ReactNode; // Содержимое кнопки
    className?: string; // Дополнительные классы для стилизации
}

const Button: React.FC<ButtonProps> = ({ onClick, children, className = '' }) => {
    return (
        <button 
            onClick={onClick} 
            className={`bg-pink-300 hover:bg-pink-400 text-black 
                px-4 py-2 rounded-full ${className}`}
        >
            {children}
        </button>
    );
};

export default Button;
