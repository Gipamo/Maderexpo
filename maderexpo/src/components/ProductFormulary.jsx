import React from 'react';
import '../css/App.css'

function ProductFormulary () {
     
        return (
            <div>
                <form>
                    <h1>Formulario de productos</h1>
                <label for="CName" class="subtitle">Nombre completo:</label>
                <input type="text" name="Cname" id=""></input>
                <label for="CEnterprise" class="subtitle">Nombre de la empresa:</label>
                <input type="text" name="CEnterprise" id=""></input>
                <label for="CCountry" class="subtitle">País:</label>
                <input list="Countries" name="CCountry" id=""></input>
                
                <label for="CEmail" class="subtitle">Dirección de correo electronico:</label>
                <input type="email" name="CEmail" id=""></input>
                <label for="CPhone" class="subtitle">Teléfono:</label>
                <input type="text" name="CPhone" id=""></input>
                <label for="Cespesor" class="subtitle">Espesor de la madera(mm):</label>
                <input list="Espesor" name="Cespesor" id=""></input>
                
                <label for="CAncho" class="subtitle">Ancho de la madera(mm):</label>
                <input list="Ancho" name="Cancho" id=""></input>
                
                <label for="CLargo" class="subtitle">Largo de la madera(mm):</label>
                <input type="number" name="CLargo" id=""></input>
                <label for="CComentarios">Comentarios Adicionales (opcional):</label>
                <textarea name="CComentarios" id="" cols="30" rows="10"></textarea>
                <input type="submit" value="Enviar datos" class="btn btn_dark"></input>
             </form>
        </div>
        )
    }

    export default ProductFormulary ;