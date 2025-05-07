import React from "react";

interface InputProps {
  value: string; // Значение инпута
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void; // Обработчик изменения
  placeholder?: string; // Плейсхолдер (опционально)
  type?: string; // Тип инпута (опционально, по умолчанию 'text')
  className?: string; // Дополнительные классы (опционально)
}

const Input: React.FC<InputProps> = ({
  value,
  onChange,
  placeholder,
  type = 'text',
  className = '',
}) => {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`border rounded p-2 ${className}`}
    />
  );
};

export default Input;
