import React from 'react';
import '../css/compromise.css'


function Compromise() {

  return (
    <div>
      <main class="container w-50">
        <div
          id="carouselExampleControls"
          class="carousel slide row"
          data-ride="carousel"
        >
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                class="d-block w-100"
                src="https://www.ambientum.com/wp-content/uploads/2019/07/naturaleza-sol-arboles.jpg"
                alt="Bosque soleado"
              />
            </div>
            <div class="carousel-item">
              <img
                class="d-block w-100"
                src="https://champagnat.org/wp-content/uploads/2019/12/noticias_imagem-news_5367.jpg"
                alt="Mundo verde"
              />
            </div>
            <div class="carousel-item">
              <img
                class="d-block w-100"
                src="https://2.bp.blogspot.com/--fsK8QfBOqo/Uo6_9MGlp0I/AAAAAAAAAe8/QB5a0UWmqB4/s1600/GREEN.jpg"
                alt="Compromiso ambiental"
              />
            </div>
          </div>
          <a
            class="carousel-control-prev"
            href="#carouselExampleControls"
            role="button"
            data-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a
            class="carousel-control-next"
            href="#carouselExampleControls"
            role="button"
            data-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
        <article class="mt-5">
          <h2 class="text-center title mb-5">Nuestro compromiso</h2>
          <p class="text-justify paragraph">
            Maderexpo le apunta al desarrollo sostenible, Considerando que la
            protección del Medio Ambiente es una condición fundamental para el
            desarrollo de las actividades a largo plazo, así como una contribución
            hacia la comunidad y las generaciones futuras.
        </p>
          <h3>Nos comprometemos a:</h3>
          <ul class="compromise_list">
            <li>
              <span class="paragraph">
                Favorecer los conceptos de Desarrollo Sostenible, en el ámbito de sus operaciones.
              </span>
            </li>
            <li>
              <span class="paragraph">
                Cumplir con las normas legales y otros compromisos ambientales adquiridos por la empresa, incluidos los Principios y Criterios de Manejo Forestal Sustentable
              </span>
            </li>
            <li>
              <span class="paragraph">
                Reducir en forma continua y progresiva los impactos ambientales significativos de sus operaciones y servicios, mediante el uso de las tecnologías disponibles más adecuadas.
              </span>
            </li>
            <li>
              <span class="paragraph">
                Prevenir la contaminación en todas nuestras actividades y servicios.
              </span>
            </li>
            <li>
              <span class="paragraph">
                Capacitar a su personal y entregarle los medios adecuados para que trabaje con una actitud responsable hacia el medioambiente.
              </span>
            </li>
            <li>
              <span class="paragraph">
                Implementar y mantener esta política, a través de la plataformaweb.
              </span>
            </li>
            <li>
              <span class="paragraph">
                Difundir estos conceptos y este compromiso entre su personal, empresas de servicios, proveedores y otras partes interesadas.
              </span>
            </li>
          </ul>
        </article>
      </main>
    </div>
  );
}



export default Compromise;