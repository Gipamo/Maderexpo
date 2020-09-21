import React from 'react';
import '../css/start.css'
import bosque from '../img/Bosque.png'


function Start(){

    return(
        <div class="gridempezar">
            <div class="slogan">
                <h1 class="title">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</h1>
            </div>
            <img src={bosque} alt="" class="img_complete"></img>
        </div>
    )
}



export default Start;