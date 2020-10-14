import React from "react";
import "../css/App.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="App-header">
      <div className="header minWidth">
        <div className="language">
          <button class="btn btn_dark">Language</button>
        </div>
        <h1 className="title_name">MADEREXPO</h1>
        <div className="navBar">
          <Link to="/">
            <a href="" class="navBar_item">Inicio</a>
          </Link>
          <Link to="/who">
            <a href="" class="navBar_item">Nuestras Operaciones</a>
          </Link>
          <Link to="/compromise">
            <a href="" class="navBar_item">Desarrollo Sostenible</a>
          </Link>
          <Link to="/product">
            <a href="" class="navBar_item">Nuestro Producto</a>
          </Link>
          <Link to="/relation">
            <a href="" class="navBar_item">Relacionate con nosotros</a>
          </Link>
          <Link to="/login">
            <a href="" class="navBar_item">Iniciar Sesion</a>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
