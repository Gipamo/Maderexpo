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
            <p class="paragraph">La madera de teca destaca por sus propiedades cuando se usa para fabricar productos que se colocan en exterior, especialmente por su durabilidad natural. Actualmente es una de las maderas tropicales más conocidas en el mercado y entre sus múltiples usos destacan la construcción naval y el mobiliario de exterior y de lujo.</p>
            <img src={tecabloque} alt=""></img>
        </div>
    </div>
    );
}



export default Product;