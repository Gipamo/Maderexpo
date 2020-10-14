import React from 'react'
import '../css/who.css'
import quienes from '../img/quienes.png'
import mujer from '../img/mujer.png'



function Who() {

    return (
        <div class="grid who_minWidth">

            <div class="grid_title title">
                <h2>¿Quienes Somos?</h2>
            </div>

            <div class="grid_title title">
                <h2>Misión y Visión</h2>
            </div>

            <div class="grid_title title">
                <h2>Nuestra Historia</h2>
            </div>

            <div>
                <div class="grid_whoAre">
                    <aside class="paragraph">Representa el comercio de exportación nacional en el sector forestal de madera, comercializa los productos de madera teca a los empresarios y personas naturales del mundo, teniendo una fuerte presencia de este sector en Colombia, somos responsables de las comunidades étnicas y dueñas colectivas del bosque natural promoviendo una comercialización legal, sostenible y responsable.</aside>
                </div>
                <br></br>

                <div class="grid_whoAre">
                    <aside class="paragraph">Creada en octubre de 2020, Maderexpo es una de las operaciones forestales de exportación de madera Teca más importantes del país y un importante actor de la economía en Colombia y motor de Urabá, región en la que concentra su actividad productiva.</aside>
                </div>
            </div>

            <div class="Mision_vision">
                <h3 class="subtitle">Misión:</h3>
                <p class="paragraph">Producir y exportar madera de manera eficiente, confiable y rentable, cumpliendo con los más altos estándares de seguridad, salud, medio ambiente y ética empresarial, contribuyendo al progreso de nuestra gente y las comunidades vecinas </p>
                <h3 class="subtitle">Visión:</h3>
                <p class="paragraph">Ser el productor y exportador de madera Teca líder a nivel mundial y un aliado clave para el progreso y desarrollo sostenible de Urabá</p>
            </div>

            <div class="history">
                <p class="paragraph">Maderexpo inició sus operaciones a mediados del 2020 con varias exportaciones a modo de prueba para el mercado asiático dando inicio a algo mucho más grande para nosotros, con un grupo de trabajo reducido pero multicultural con muchas ganas de emprender y aprender sobre el mercado de la exportación y el compromiso ambiental que requiere.


                Hoy día en tiempos inciertos seguimos trabajando y asegurando a nuestros clientes la madera Teca con mayor calidad y servicio al cliente excepcional para contribuir en un mercado cada vez más creciente donde no es posible visualizar límites.
                </p>
            </div>

        </div>

    )
}



export default Who;