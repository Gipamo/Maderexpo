import React from 'react';
import '../css/PreguntasFrecuentes.css'

function PreguntasFrecuentes(){



    return(
        <div>
        <main id="frecuent">
        <div><h1 class="title">Preguntas Frecuentes</h1></div>
        <hr></hr>
        <br></br>
       
        <section class="container">
            <button type="button"class="accordion" data-toggle="collapse" data-target="#panel">Estoy interesado en los productos, ¿cómo puedo adquirirlos?.</button>
            <div id="panel" class="collapse">
                <p>Para realizar una compra, debes dejar tus datos en la sección de contacto.</p>
            </div>

            <button type="button"class="accordion" data-toggle="collapse" data-target="#panel1">¿Maderexpo es una empresa comprometida con el medio ambiente?.</button>
            <div id="panel1"class="collapse">
            <p>Por supuesto, nuestro compromiso con el medioambiente es clave para el desarrollo de la región, para más información visitar la sección de "Compromiso Ambiental".</p>
            </div>

            <button type="button"class="accordion" data-toggle="collapse" data-target="#panel2">¿La madera Teca es de buena calidad?</button>
            <div id="panel2"class="collapse">
            <p>Es una especie que destaca por sus magníficas características de durabilidad natural, además de poseer una buena estabilidad dimensional.</p>
            </div>

            <button type="button"class="accordion" data-toggle="collapse" data-target="#panel3">¿Quiero visitar presencialmente las oficinas, ¿cómo puedo hacerlo?</button>
            <div id="panel3"class="collapse">
            <p>Las oficinas de Maderexpo se encuentran en la ciudad de Medellín en el horario de Lunes a Viernes de 8AM a 5PM y Sábados de 9AM a 3PM.</p>
            </div>

            <button type="button"class="accordion" data-toggle="collapse" data-target="#panel4">¿Cómo sé que mi solicitud fue vista y eventualmente será respondida en el menor tiempo posible?.</button>
            <div id="panel4"class="collapse">
            <p>Procesamos todas las solicitudes el mismo día si fueron enviadas antes de las 2PM hora Colombia, posterior a esta hora todas las solicitudes serán respondidas al siguiente día hábil.</p>
            </div>

            <button type="button"class="accordion" data-toggle="collapse" data-target="#panel5">Quiero enviar una solicitud, queja, felicitación o reclamo, ¿Cómo puedo hacerlo?.</button>
            <div id="panel5"class="collapse">
            <p>Recibimos todas las solicitudes en la sección de PQRS, estaremos atentos a la tuya, nuestro equipo la responderá en el menor tiempo posible.</p>
            </div>
            
        </section>
        
    </main>
    </div>   
    
    
    )

}

export default PreguntasFrecuentes;