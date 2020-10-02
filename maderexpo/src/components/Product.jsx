import React from 'react';
import '../css/product.css'
import teca from '../img/teca-bloques-slide.jpg'
import tecabloque from '../img/teca-bloques.jpg';

function Product(){





    return(
    <div>
        <div>
            <img src={teca} alt="" class="img_complete minWidth"></img>
        </div>
        <div class="container_definition">
            <h1 class="subtitle">Madera Teca</h1>
            <p class="paragraph">Lorem ipsum dolor sit amet, consectetur adipisicing elit. In explicabo consequuntur labore natus nisi, debitis qui esse! Nemo veniam recusandae enim, quam officia voluptate est voluptas repellat rem porro exercitationem!</p>
            <img src={tecabloque} alt=""></img>
        </div>
    </div>
    );
}



export default Product;