import React from 'react';
import '../css/App.css'
import Icon from '../img/icono.png';
import { Switch, Route,Link } from 'react-router-dom'

function ButtonsRelation(){

        return(
            <div>
                <div class="parent">
                <div class="div1"> <Link to="/map"> <img src={Icon} alt="Icono" /><br/><a href="">Sedes Fisicas</a> </Link></div>
                <div class="div2"> <img src={Icon} alt="Icono" /><br/><a href="">Preguntas Frecuentes</a> </div>
                <div class="div3"> <img src={Icon} alt="Icono" /><br/><a href="">Glosario</a> </div>
                <div class="div4"> <img src={Icon} alt="Icono" /><br/><a href="">Buzon de Contacto</a> </div>
                <div class="div5"> <img src={Icon} alt="Icono" /><br/><a href="">Buzon de Sugerencias</a> </div>
                <div class="div6"> <Link to="/productform"> <img src={Icon} alt="Icono" /><br/><a href="">Preguntas del Producto</a> </Link></div>
                </div>
            </div>
        )

}

export default ButtonsRelation;
