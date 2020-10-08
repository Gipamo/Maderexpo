import React from 'react';
import '../css/App.css'

function ProductFormulary () {

        return (
            <div >
                <form className="card">
                <h1 className="titulo-form">Formulario de productos</h1>
                <input type="text" name="Cname" id="" placeholder="Nombre Completo"></input>
                <input type="text" name="CEnterprise" placeholder="Nombre Empresa" id=""></input>
                <input list="Countries" name="CCountry" placeholder="Pais"id=""></input>

                
                <input type="email" name="CEmail" placeholder="Correo Electronico"id=""></input>
               
                <input type="text" name="CPhone" placeholder="Telefono"id=""></input>
                
                <input list="Espesor" name="Cespesor"placeholder="Espesor(mm)" id=""></input>

               
                <input list="Ancho" name="Cancho"placeholder="Ancho(mm)" id=""></input>

                
                <input type="number" name="CLargo" placeholder="Largo(mm)"id=""></input>
                
                <textarea name="CComentarios" id="" cols="30" rows="10" placeholder="Comentarios adicionales"></textarea>
                <input type="submit" value="Enviar datos" class="btn btn_dark"></input>
             </form>
        </div>
        )
    }

    export default ProductFormulary ;