import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import logopeb from '../../assets/logopeb.png'



function Home(){

    const navigate = useNavigate()
    const goToLogin = ()=>{
        navigate('/login')
    }
    return(
        <>
        Home
        <button onClick={goToLogin}>Login</button>
        </>
    );
}
export default Home;
