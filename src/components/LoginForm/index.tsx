import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './LoginForm.css';
import ErrorMessage from '../ErrorMessage';
import { login } from '../../loginActions';
import TextInput from '../TextInput';
import Button from '../Button';

const LoginForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [errorMessageText, setErrorMessageText] = useState('');

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
      dispatch(login());

      navigate('/pieDashboard');
    }

    setUsername('');
    setPassword('');
  };

  return (
    <section className='loginForm'>
      <form onSubmit={handleSubmit}>
        <h2 className='title'>Insert your credentials to access</h2>
        <TextInput
          label="Username"
          value={username}
          placeholder="Insert your username"
          onChange={handleUsernameChange}
          isPassword={false}
        />
        <TextInput
          label="Password"
          value={password}
          placeholder="Insert your password"
          onChange={handlePasswordChange}
          isPassword={true}
        />
        <Button>Login</Button>

        {showModal && <ErrorMessage onClose={closeModal} errorMessageText={errorMessageText} />}

      </form>
    </section>
  );
};

export default LoginForm;
