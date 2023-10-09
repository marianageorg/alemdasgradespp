import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cadastro from "../Pages/Cadastro/Cadastro";
// import Login from "../pagina/Login/Login";
import Home from "../Pages/Home/Home"
import Carrinho from "../Pages/Carrinho/Carrinho"
import LoginScreen from '../Pages/Login/LoginScreen'


function Rota() {
    return (
      <BrowserRouter>
        <Routes>
            <Route index element={<Home/>}/>
            <Route path="login" element={<LoginScreen />}/>
            <Route path="cadastro" element={<Cadastro/>}/>
            <Route path="home" element={<Home/>}/>
            <Route path="carrinho" element={<Carrinho/>}/>
        </Routes>

      </BrowserRouter>
      
    );
  }
  
  export default Rota;