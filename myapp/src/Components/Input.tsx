import React from "react";

interface InputProps {
    value: any;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder: string;
    type?: string;
    className?: string;
    required?: boolean; // Добавляем это свойство
}

const Input = ({value, onChange, placeholder, type = 'text', className}) =>{
    return (
        <input 
        type = {type}
        value = {value}
        onChange={onChange}
        placeholder={placeholder}
        className={`border rounded p-2 ${className}`}
        />
    );
};

export default Input;