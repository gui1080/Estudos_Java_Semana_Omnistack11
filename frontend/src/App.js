//REACT
// npm start
// react-router-dom VAI LIDAR COM ROTAS DO APLICATIVO

import React from 'react';
//import Header from './Header'; 
import './global.css'; 

//import Logon from './pages/Logon/'
// n precisa mais disso ja q criamos uma rota

import Routes from './routes';

// JSX: Javascript XML (sintaxe do html)
// isso eh uma funcao java q retorna html
// aqui tem live reload


/*
¨propriedades" aqui no react tipo atributos de html valem
sao a mesma sintaxe passadas para COMPONENTES
INTEGRACAO!
*/


function App() {

  /*
  const [counter, setCounter] = useState(0);
  //ESTADO
  //variavel "hibrida"
  // Array[valor, funcao_de_mudar_valor()]

  function increment(){

    setCounter(counter+1);
    //console.log(counter); 

  }
  */



  return (

    <Routes />
    
    );
}

export default App;
