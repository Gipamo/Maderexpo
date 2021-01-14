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
                <div className="parent">
                  <div className="upButton">
                    <div className="div1">
                      <Link className="hover" to="/map">
                        <img src={IconMap} alt="Icono" /><br/>Sedes Fisicas
                      </Link>
                    </div>
                    <div className="div2">
                    <Link to="/question">
                      <img src={IconQuestion} alt="Icono" /><br/>Preguntas Frecuentes
                    </Link>
                    </div>
                    <div className="div3">
                      <Link to="/glosary">
                        <img src={IconGlosary} alt="Icono"/><br/>Glosario
                      </Link>
                    </div>
                  </div>
                  <div className="downButton">
                    <div className="div4">
                      <Link to="/pqrs">
                        <img src={IconSugest} alt="Icono" /><br/>
                      Buzon de sugerencias
                      </Link>
                    </div>
                    <div className="div6">
                      <Link to="/productform">
                        <img src={IconProduct} alt="Icono" /><br/>
                      Preguntas del Producto
                      </Link>
                    </div>
                </div>
                </div>
            </div>
        )


}

export default ButtonsRelation;
