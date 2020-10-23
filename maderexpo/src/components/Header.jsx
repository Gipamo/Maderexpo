import React from "react";
import "../css/App.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="App-header">
      <div className="header minWidth">
        <div className="language">
          <button className="btn btn_dark">Language</button>
        </div>
        <h1 className="title_name">MADEREXPO</h1>
        <div className="navBar">
          <Link className="navBar_item" to="/">Inicio
          </Link>
          <Link className="navBar_item" to="/who">Nuestras Operaciones
          </Link>
          <Link className="navBar_item" to="/compromise">Desarrollo Sostenible
          </Link>
          <Link className="navBar_item" to="/product">Nuestro Producto
          </Link>
          <Link className="navBar_item" to="/relation">Relacionate con nosotros
          </Link>
          <Link className="navBar_item" to="/login">Iniciar Sesion
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
