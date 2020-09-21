import React from 'react'
import '../css/who.css'
import quienes from '../img/quienes.png'
import mujer from '../img/mujer.png'



function Who(){

    return(
    <div class="grid who_minWidth">

        <div class="grid_title title">
            <h2>¿Quienes Somos?</h2>
        </div>

        <div class="grid_title title">
            <h2>Mision y Vision</h2>
        </div>

        <div class="grid_title title">
            <h2>Nuestra Historia</h2>
        </div>

        <div>
            <div class="grid_whoAre">
                <img src={quienes} alt="" class="img_small"></img>
                <aside class="paragraph">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor sapiente cum perferendis laboriosam eos</aside>
            </div>
            <br></br>

            <div class="grid_whoAre">
                <img src={mujer} alt="" class="img_small"></img>
                <aside class="paragraph">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem numquam vitae et libero illum eveniet</aside>
            </div>
        </div>

        <div class="Mision_vision">
            <h3 class="subtitle">Misión:</h3>
            <p class="paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto veniam a impedit esse adipisci quibusdam enim quidem exercitationem totam in. In, magnam. Assumenda voluptatibus doloribus a voluptate veniam, corrupti rerum?</p>
            <h3 class="subtitle">Visión:</h3>
            <p class="paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, libero nihil minima magnam error, voluptas, eveniet impedit odio ratione ducimus molestias necessitatibus eum sed neque! In ex vel dignissimos quisquam!</p>
        </div>

        <div class="history">
            <p class="paragraph">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut et nam tenetur iusto cum tempora totam. Reprehenderit molestias consequatur non, modi, magni harum molestiae ratione, deleniti suscipit unde ad cupiditate! Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus laborum dicta enim libero sint natus et, ullam consectetur corrupti possimus placeat voluptates, pariatur rerum, aut praesentium id! Excepturi, accusamus in! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam debitis dolor quibusdam aperiam exercitationem inventore laborum nisi saepe quos error amet itaque, temporibus porro, est officiis sapiente doloribus ducimus eos?</p>
        </div>

    </div>
   
    )
}



export default Who;