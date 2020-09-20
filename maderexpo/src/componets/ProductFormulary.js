import React, { Component } from 'react'

export default class ProductFormulary extends Component {
    render() {
        return (
            <div>
                <form>
                <label for="CName" class="subtitle">Nombre completo:</label>
                <input type="text" name="Cname" id=""/>
                <label for="CEnterprise" class="subtitle">Nombre de la empresa:</label>
                <input type="text" name="CEnterprise" id=""/>
                <label for="CCountry" class="subtitle">País:</label>
                <input list="Countries" name="CCountry" id=""/>
                <label for="CEmail" class="subtitle">Dirección de correo electronico:</label>
                <input type="email" name="CEmail" id=""/>
                <label for="CPhone" class="subtitle">Teléfono:</label>
                <input type="text" name="CPhone" id=""/>
                <label for="Cespesor" class="subtitle">Espesor de la madera(mm):</label>
                <input list="Espesor" name="Cespesor" id=""/>
                <label for="CAncho" class="subtitle">Ancho de la madera(mm):</label>
                <input list="Ancho" name="Cancho" id=""/>
                <label for="CLargo" class="subtitle">Largo de la madera(mm):</label>
                <input type="number" name="CLargo" id=""/>
                <label for="CComentarios">Comentarios Adicionales (opcional):</label>
                <textarea name="CComentarios" id="" cols="30" rows="10"></textarea>
                <input type="submit" value="Enviar datos" class="btn btn_dark"/>
            </form>
                
            </div>
        )
    }
}
