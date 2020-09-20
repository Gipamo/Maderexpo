import React from 'react';
import Icon from './img/icono.png';
import './App.css';



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
      <div class="parent">
      <div class="div1"> <img src={Icon} alt="Icono" /><br/><a href="">Sedes Fisicas</a> </div>
      <div class="div2"> <img src={Icon} alt="Icono" /><br/><a href="">Preguntas Frecuentes</a> </div>
      <div class="div3"> <img src={Icon} alt="Icono" /><br/><a href="">Glosario</a> </div>
      <div class="div4"> <img src={Icon} alt="Icono" /><br/><a href="">Buzon de Contacto</a> </div>
      <div class="div5"> <img src={Icon} alt="Icono" /><br/><a href="">Buzon de Sugerencias</a> </div>
      <div class="div6"> <img src={Icon} alt="Icono" /><br/><a href="">Preguntas del Producto</a> </div>
</div>
      </div>



  );
}

export default App;
