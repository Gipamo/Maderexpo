import React, { Component } from 'react'
import Icon from '../img/icono.png';

export default class ButtonsRelation extends Component {
    render() {
        return(
        <div class="parent">
        <div class="div1"> <img src={Icon} alt="Icono" /><br/><a href="">Sedes Fisicas</a> </div>
        <div class="div2"> <img src={Icon} alt="Icono" /><br/><a href="">Preguntas Frecuentes</a> </div>
        <div class="div3"> <img src={Icon} alt="Icono" /><br/><a href="">Glosario</a> </div>
        <div class="div4"> <img src={Icon} alt="Icono" /><br/><a href="">Buzon de Contacto</a> </div>
        <div class="div5"> <img src={Icon} alt="Icono" /><br/><a href="">Buzon de Sugerencias</a> </div>
        <div class="div6"> <img src={Icon} alt="Icono" /><br/><a href="">Preguntas del Producto</a> </div>
        </div>
        )
    }
}

