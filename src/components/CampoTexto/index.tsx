import React from 'react';
import './CampoTexto.css';

interface CampoTextoProps {
  label: string;
  valor: string;
  placeholder?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const CampoTexto: React.FC<CampoTextoProps> = (props) => {
  const { label, valor, placeholder, onChange } = props;

  return (
    <div className='campo-texto'>
      <label>{label}</label>
      <input
        value={valor}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
}

export default CampoTexto;
