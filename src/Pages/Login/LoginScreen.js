import React, { useState } from 'react';
import Header from '../../components/Header/Header';
import './LoginScreen.css';
// import logopeb from '../../assets/logopeb.png'



const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Aqui você pode adicionar a lógica para autenticar o usuário
    // e redirecioná-lo para a próxima página após o login bem-sucedido.
  };

  return (
    
    // <div className="logopeb">
    //     {/* Logo */}
    //     <img src={logopeb} alt='Logo' />
    // </div>
    <>
    <Header/>
    
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
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="login-button" onClick={handleLogin}>
          Entrar
        </button>
      </div>
    </div>
    </>
  );
};

export default LoginScreen;
