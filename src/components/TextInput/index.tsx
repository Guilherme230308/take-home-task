import React from 'react';
import './TextInput.css';

interface TextInputProps {
  label: string;
  value: string;
  placeholder: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  isPassword?: boolean;
}

const TextInput: React.FC<TextInputProps> = (props) => {
  const { label, value, placeholder, onChange, isPassword = false } = props;
  const inputType = isPassword ? 'password' : 'text';

  return (
    <div className='text-input'>
      <label>{label}</label>
      <input
        type={inputType}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        />
    </div>
  );
}

export default TextInput;
