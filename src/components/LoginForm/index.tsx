import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginForm.css';
import CampoTexto from '../CampoTexto';
import Botao from '../Botao';
import ErrorMessage from '../ErrorMessage';

const LoginForm = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showModal, setShowModal] = useState(false);

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };


  const [errorMessageText, setErrorMessageText] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    // Validation logic
    if (username.trim() === '') {
      setErrorMessageText('Username cannot be empty.');
      openModal();
    } else if (password.trim() === '') {
      setErrorMessageText('Password cannot be empty.');
      openModal();
    } else if (username.trim() !== 'admin' || password.trim() !== 'admin') {
      setErrorMessageText('Incorrect username or password.');
      openModal();
    } else {
      // Redirect to dashboard
      navigate('/dashboard');
    }

    // Reset form fields
    setUsername('');
    setPassword('');
  };

  return (
    <section className='loginForm'>
      <form onSubmit={handleSubmit}>
        <h2 className='title'>Insert your credentials to access</h2>
        <CampoTexto
          label="Username"
          valor={username}
          placeholder="Insert your username"
          onChange={handleUsernameChange}
        />
        <CampoTexto
       
       
       label="Password"
          valor={password}
          placeholder="Insert your password"
          onChange={handlePasswordChange}
        />
        <Botao>
          Login
        </Botao>

        {showModal && <ErrorMessage onClose={closeModal} errorMessageText={errorMessageText} />}

      </form>
    </section>
  );
}

export default LoginForm;