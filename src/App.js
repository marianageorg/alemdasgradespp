import './App.css';
// import Header from './components/Header/Header';
// import Footer from './components/Footer/Footer';
// import LoginScreen from './Pages/Login/LoginScreen';
// import Cadastro from './Pages/Cadastro/Cadastro';
import Rota from './Rotas/Rota';
import { ChakraProvider } from '@chakra-ui/react'

function App() {
  return (
    <>
    {/* <Header/>
    <Footer/>
    <LoginScreen/>
    <Cadastro/> */}
    <ChakraProvider>
    <Rota/>
    </ChakraProvider>
    </>

  );
}

export default App;
