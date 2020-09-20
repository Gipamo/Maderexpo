import React from 'react';
import './App.css';
import ButtonsRelation from './componets/ButtonsRelation';
import Navbar from './componets/Navbar';
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
            <Navbar/>
          </div>
      </header>
      <ButtonsRelation/>
      </div>



  );
}

export default App;
