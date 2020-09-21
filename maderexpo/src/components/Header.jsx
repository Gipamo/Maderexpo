import React from 'react'
import '../css/App.css'
import Login from './Login'
import Who from './Who'
import Product from './Product'
import ReactDOM from 'react-dom';
import App from '../App';
import { Switch, Route,Link } from 'react-router-dom'




function Header(){


    return(
        <header className="App-header">
        <div class="header minWidth">
            <div class="language">
                <button class="btn btn_dark">Language</button>
            </div>
            <h1 class="title_name">MADEREXPO</h1>
            <div class="navBar">
                    <Link to="/"><a href="">Inicio</a></Link>
                    <Link to="/who"><a href="">Nuestras Operaciones</a></Link>
                    <Link to="/compromise"><a href="">Desarrollo Sostenible</a></Link>
                    <Link to="/product"><a href="">Nuestro Producto</a></Link>
                    <Link to="/relation"><a href="">Relacionate con nosotros</a></Link>
                    <Link to="/login"><a href="">Iniciar Sesion</a></Link>


            </div>
        </div>
      </header>
    )
}



export default Header;