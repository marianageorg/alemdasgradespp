import React from 'react';
import './Header.css'; // Estilização do Header
import logoImagem from '../../assets/logopp.png'
import { useNavigate } from 'react-router-dom';

const Header = () => {

  const navigate = useNavigate()

  const goToLogin = ()=>{
    navigate('/login')
  }

  const goToCadastro = ()=>{
    navigate('/cadastro')
  }

  return (
    <header className="header" style={{ backgroundColor: '#000' }}>
      <div className="logo">
        {/* Logo */}
        <img src={logoImagem} alt='Logo' />
      </div>
      <div className="search-bar">
        {/* Barra de pesquisa */}
        <input type="text" placeholder="Pesquisar..." />

      </div>
      <div className="buttons">
        <button className="btn-entrar" onClick={(goToLogin)}>Entrar</button>
        <button className="btn-cadastrar" onClick={(goToCadastro)}>Cadastrar</button>
        <button className="btn-carrinho" onClick={('/')}>Carrinho</button>
      </div>


    </header>
  );
};

export default Header;
