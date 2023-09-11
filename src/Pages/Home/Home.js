import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import logopeb from '../../assets/logopeb.png'



function Home(){

    const navigate = useNavigate()
    const goToLogin = ()=>{
        navigate('/login')
    }

    const goToHome = ()=>{
        navigate('/home')
    }

    const [listaDeFrutas, setListaDeFrutas] = useState(["Biscuit 1", "Biscuit 2"]);
                    
    const onClickAdicionarAcai = () => {
    const copiaDaListaDeFrutas = [...listaDeFrutas];
    copiaDaListaDeFrutas.push("Biscuit ...");
    setListaDeFrutas(copiaDaListaDeFrutas);
  };
    const listaMapeada = listaDeFrutas.map((cadaFruta, index) => {
    return <li key={index}>{cadaFruta}</li>;
  });
  return (
    <>

      <ul>{listaMapeada}</ul>

      <button onClick={onClickAdicionarAcai}> Adicionar Biscuit </button>

      <button onClick={goToLogin}> Entrar</button>
    </>
  );
}
    // return(
    //     <>
    //     Home
    //     <button onClick={goToLogin}>Entrar </button>
    //     </>
    // );

export default Home;
