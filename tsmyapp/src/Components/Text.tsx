import React from "react";

interface TextProps {
    children: React.ReactNode; // Текст или содержимое компонента
    className?: string; // Дополнительные классы для стилизации
}

const Text: React.FC<TextProps> = ({ className = '', children }) => {
    return (
        <p className={`text-base ${className}`}>
            {children}
        </p>
    );
};

export default Text;