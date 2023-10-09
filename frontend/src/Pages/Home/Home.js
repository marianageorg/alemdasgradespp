import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header/Header';
import './Home.css';


const Home = () => {

      const navigate = useNavigate()
      const goToCarrinho = ()=>{
          navigate('/carrinho')
      }

      const goToHome = ()=>{
          navigate('/home')
      }

    const products = [
      {
        id: 1,
        name: 'Biscuit Boneca',
        price: 15.00,
        image: ''
      },
      {
        id: 2,
        name: 'Biscuit Placa',
        price: 15.00,
        image: 'https://via.placeholder.com/150',
      },
      {
        id: 3,
        name: 'Biscuit Unicórnio',
        price: 15.00,
        image: 'https://via.placeholder.com/150',
      },
    ];

  return (
    <>
      <Header/>
      <div className='background-image'>
      <div className="App">
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product">
            <img src={product.image} alt={product.name}/>
            <h2>{product.name}</h2>
            <p>R$ {product.price.toFixed(2)}</p>
            <button onClick={(goToCarrinho)}>Adicionar ao Carrinho</button>
          </div>
        ))}
      </div>
    </div>
  

      </div>
    </>
  );
}

export default Home;
