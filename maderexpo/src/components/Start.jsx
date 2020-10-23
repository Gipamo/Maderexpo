import React from 'react';
import '../css/start.css'
import bosque from '../img/Bosque.png'


function Start(){

    return(
        <div className="gridempezar">
            <div className="slogan">
                <h1 className="title">Madera Teca sostenible y de la mejor calidad
                                    Moderna, sostenible y de fácil manipulación
                </h1>
            </div>
            <img src={bosque} alt="" className="img_complete"></img>
        </div>
    )
}



export default Start;