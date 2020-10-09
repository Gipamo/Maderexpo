import React from 'react';
import '../css/App.css'
import IconMap from '../img/icono.png';
import IconQuestion from '../img/preguntas-mas-frecuentes.png';
import IconGlosary from '../img/diccionario.png';
import IconSugest from '../img/bueno.png';
import IconProduct from '../img/inventario.png';
import {Link } from 'react-router-dom'

function ButtonsRelation(){

        return(
            <div>
                <div class="parent">
                
                  <div class="upButton">
                    <div class="div1"> <Link to="/map"> <img src={IconMap} alt="Icono" /><br/><a href="">Sedes Fisicas</a> </Link></div>
                    <div class="div2"> <img src={IconQuestion} alt="Icono" /><br/><a href="">Preguntas Frecuentes</a> </div>
                    <div class="div3"> <Link to="/glosary"> <img src={IconGlosary} alt="Icono"/><br/><a href="">Glosario</a></Link></div>  
                </div>
                
                  <div class="downButton"> 
                    <div class="div4"> <Link to="/pqrs"> <img src={IconSugest} alt="Icono" /><br/><a href="">Buzon de sugerencias</a> </Link> </div>
                    <div class="div6"> <Link to="/productform"> <img src={IconProduct} alt="Icono" /><br/><a href="">Preguntas del Producto</a> </Link></div>
                
                </div>   

               
                </div>
            </div>
        )


}

export default ButtonsRelation;
