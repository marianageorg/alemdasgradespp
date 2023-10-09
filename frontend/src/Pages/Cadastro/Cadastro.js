import React, { useState } from 'react';
import axios from 'axios';
import { Route, useNavigate } from 'react-router-dom';
import Header from '../../components/Header/Header';
import './Cadastro.css'; // Arquivo de estilos para personalização



const Cadastro = () => {
  const navigate = useNavigate();

  const goToLogin = () => {
    navigate('/login')
  }

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      nome, email, senha
    }

    await axios.post('http://localhost:3008/api/user/create', data)
    .then(response =>{
      alert(response.data.message)
      //saveUserInfoLocalStorage(response.data.token)
      goToLogin()
    })
    .catch(error => console.log(error))
  };
   
  return (
    <>
    <Header/>
    <div className='background-image3'>
    <div className="cadastro-container">
      <form className="cadastro-form" onSubmit={handleSubmit}>
        <h2>Cadastro</h2>
        <label>
          Nome:
          <input type="text"
          placeholder='Nome'
          value={nome} onChange={(e) => setNome(e.target.value)} />
        </label>
        <label>
          Email:
          <input type="email"
          placeholder='Email'
          value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <label>
          Senha:
          <input type="password"
          placeholder='Senha'
          value={senha} onChange={(e) => setSenha(e.target.value)} />
        </label>
        <button type="submit">Cadastrar</button>
      </form>
    </div>
    </div>
  </>
  );
};

export default Cadastro;
