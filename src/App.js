import './App.css';
import TelaInicial from './components/TelaInicial/TelaInicial';
import TelaMatches from './components/TelaMatches/TelaMatches';
import Header from './components/Header/Header';
import React, {useState} from "react";
import GoogleFontLoader from 'react-google-font-loader';



function App() {

  const [tela, setTelas] = useState(true);
  

  const mudarTela = () =>{
    if (tela === true) {
      return <TelaInicial />
    } else if (tela === false){
      return <TelaMatches />
    }
  }
  const onClickMudarTela = () => {
    setTelas(!tela)
  };

 
  <GoogleFontLoader
    fonts={[
      { font: 'Spartan', weights: [300] },
      { font: 'Montserrat', weights: [200, 400, 700] },
    ]}
  />




  return (
   
    <div id="base" style={{fontFamily: 'Spartan'}}>

      <div id="App">
          <Header onClickMudarTela={onClickMudarTela} tela={tela}/>

        {mudarTela()}
      </div>

    </div>
  );
}

export default App;
