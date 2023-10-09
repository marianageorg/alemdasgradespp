import React, { useState } from 'react';
import Header from '../../components/Header/Header';
import './LoginScreen.css';
import axios from 'axios';
import { Route, useNavigate } from 'react-router-dom';

const LoginScreen = () => {

  const navigate = useNavigate();

  const goToHome = () => {
    navigate('/home')
  }

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    const data = {
      email, senha
    }

    await axios.post('http://localhost:3008/api/auth/login', data)
    .then(response =>{
      alert(response.data.message)
      //saveUserInfoLocalStorage(response.data.token)
      goToHome()
    })
    .catch(error => console.log(error))
  };
  //   // Aqui você pode adicionar a lógica para autenticar o usuário
  //   // e redirecioná-lo para a próxima página após o login bem-sucedido.
  // };

  return (

    <>
    <Header/>

    <form onSubmit={handleLogin} className="login-form">

    <div className='background-image2'>
    <div className="login-container">
        <div className="login-box">
          <h2>Login</h2>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />
          <button className="login-button" onClick={handleLogin} type='submit'>
            Entrar
          </button>
        </div>
      </div>
    </div>
    </form>
    </>
  );
};

export default LoginScreen;
