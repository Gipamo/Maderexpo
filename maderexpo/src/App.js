import React from 'react';
import logo from './img/quienes.png';
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

      <div class="grid">
        <div class="grid1">
          <h2>¿Quienes Somos?</h2>
        </div>
        <div class="grid1">
        <h2>Mision y Vision</h2>
        </div>
        <div class="grid1">
        <h2>Nuestra Historia</h2>
        </div>



        <div class="grid2">
          <div class="notice">
              <img src={logo} class="imagenes"></img><aside>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,</aside>
            </div>
          
        </div>
        <div class="grid2">
          
        </div>
        <div class="history">
        <aside>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,but also the leap into electronic typesetting, remaining essentially unchanged</aside>
        </div>



        <div class="grid3">
        <img src={logo} class="imagenes"></img><aside>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,</aside>
        </div>
        <div class="grid3">
          
        </div>
        <div class="history" id="historyback">
        
        </div>
      </div>





    </div>
  );
}

export default App;
