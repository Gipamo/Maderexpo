import React from 'react';
import './App.css';
import ButtonsRelation from './componets/ButtonsRelation';
import ProductFormulary from './componets/ProductFormulary';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div class="header minWidth">
            <div class="language">
                <button class="btn btn_dark">Language</button>
            </div>
            <h1 class="title_name">MADEREXPO</h1>
            <div class="navBar">
                <a href="">Inicio</a>
                <a href="" id="position">Nuestras operaciones</a>
                <a href="">Desarrollo sostenible</a>
                <a href="" id="">Nuestro producto</a>
                <a href="">Contáctanos</a>
            </div>
        </div>
      </header>
      <ButtonsRelation/>
      </div>



  );
}

export default App;
