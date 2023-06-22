import React from 'react';
import './Button.css';

interface buttonProps {
  children: React.ReactNode;
}

const Button: React.FC<buttonProps> = (props) => {
  return (
    <button className='login-button'>{props.children}</button>
  );
}

export default Button;
