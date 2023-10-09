import React from 'react';
import './Header.css'; // Estilização do Header
import logoImage from '../../assets/logo.png'
import carrinho from '../../assets/carrinho.png'
import { useNavigate } from 'react-router-dom';

const Header = () => {

  const navigate = useNavigate()

  const goToLogin = ()=>{
    navigate('/login')
  }

  const goToCadastro = ()=>{
    navigate('/cadastro')
  }

  const goToCarrinho = ()=>{
    navigate('/carrinho')
  }

  return (
<header className="header-container1">
      <div className="left-section1">
        <img src={logoImage} alt="Logo" className="logo1" />
      </div>

        <div className="user-actions1">
          <button onClick={(goToLogin)} className="login-button1">Entrar</button>

          <button onClick={(goToCadastro)} className="register-button1">Cadastrar</button>

          <button onClick={(goToCarrinho)} className="login-button2">
            <img src={carrinho} className='carrinho'></img></button>
        </div>
      
    </header>
  );
};

export default Header;
