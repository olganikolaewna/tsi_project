import React from "react";

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