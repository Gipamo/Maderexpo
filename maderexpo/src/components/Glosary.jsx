import React from 'react';

import '../css/glosary.css'



function Glosary(){

    return(
        <div id="glosary">

        <div id="tituloglosario"><h1 id="title">GLOSARIO</h1></div>
        <div class="abc subtitle">
            <button class="a">a</button>
            <button class="b">b</button>
            <button class="c">c</button>
            <button class="d">d</button>
            <button class="e">e</button>
            <button class="f">f</button>
            <button class="g">g</button>
            <button class="h">h</button>
            <button class="i">i</button>
            <button class="j">j</button>
            <button class="k">k</button>
            <button class="l">l</button>
            <button class="m">m</button>
            <button class="n">n</button>
            <button class="ñ">ñ</button>
            <button class="o">o</button>
            <button class="p">p</button>
            <button class="q">q</button>
            <button class="s">s</button>
            <button class="r">r</button>
            <button class="t">t</button>
            <button class="u">u</button>
            <button class="v">v</button>
            <button class="w">w</button>
            <button class="x">x</button>
            <button class="y">y</button>
            <button class="z">z</button>
        </div>
        
        <div class="search">
            <input type="search" id="search" placeholder="Buscar" class="paragraph"></input>
            <input type="button" value="Buscar" class="paragraph btn_dark"></input>
        </div>
        <section class="container">
            <div class="item">
                <h1 class="subtitle">Espesor</h1>
                <p class="paragraph">Se denomina espesor al grosor de un elemento: es decir, a qué tan grueso, abultado o ancho es</p>
                <a href="https://definicion.de/espesor/" class="paragraph">Referencia</a>
            </div>
            <div class="item">
                <h1 class="subtitle">Exportación</h1>
                <p class="paragraph">Las exportaciones son el conjunto de bienes y servicios vendidos por un país en territorio extranjero para su utilización. Junto con las importaciones, son una herramienta imprescindible de contabilidad nacional.</p>
                <a href="https://economipedia.com/definiciones/exportacion.html" class="paragraph">Referencia</a>
            </div>
            <div class="item">
                <h1 class="subtitle">Madera teca</h1>
                <p class="paragraph">La teca (Tectona grandis L.) es originaria del sudeste de Asia, de India, de Camboya, de Laos y de Vietnam, donde puede alcanzar alturas de hasta 40 metros. Actualmente también se encuentran plantaciones en áreas tropicales en África y en América Latina, donde los árboles crecen más rápido que en su lugar de origen, lo que disminuye los turnos de corta y hace que su aprovechamiento sea cada día más interesante.</p>
                <a href="https://www.maderea.es/la-madera-de-teca-propiedades-y-caracteristicas/" class="paragraph">Referencia</a>
            </div>
            <div class="item">
                <h1 class="subtitle">Sostenible</h1>
                <p class="paragraph">Especialmente en ecología y economía, que se puede mantener durante largo tiempo sin agotar los recursos o causar grave daño al medio ambiente. Desarrollo, economía sostenible.
                <a href="https://dle.rae.es/sostenible?m=form" class="paragraph">Referencia</a>    
                </p>
            </div>
            <div class="item">
                <h1 class="subtitle">Naturaleza</h1>
                <p class="paragraph">Principio generador del desarrollo armónico y la plenitud de cada ser, en cuanto tal ser, siguiendo su propia e independiente evolución.</p>
                <a href="http://dle.rae.es/naturaleza?m=form" class="paragraph">Referencia</a>   
            </div>
            <div class="item">
                <h1 class="subtitle">Tropical</h1>
                <p class="paragraph">Perteneciente o relativo a los trópicos.</p>
                <a href="https://dle.rae.es/tropical?m=form" class="paragraph">Referencia</a>   
            </div>
            <div class="item">
                <h1 class="subtitle">Naval</h1>
                <p class="paragraph">Perteneciente o relativo a las naves y a la navegación.</p>
                <a href="https://dle.rae.es/naval?m=form" class="paragraph">Referencia</a>   
            </div>
            <div class="item">
                <h1 class="subtitle">Etnia</h1>
                <p class="paragraph">Comunidad humana definida por afinidades raciales, lingüísticas, culturales, etc.</p>
                <a href="https://dle.rae.es/etnia?m=form" class="paragraph">Referencia</a>   
            </div>
            <div class="item">
                <h1 class="subtitle">Urabá Antioqueño</h1>
                <p class="paragraph">El Urabá antioqueño es la región bananera y platanera más importante del país y despensa de esa fruta tropical de varios mercados internacionales. El turismo en la zona gira alrededor de los cultivos de plátano y banano, del agroturismo.</p>
                <a href="http://ipc.org.co/index.php/regiones/uraba-antioqueno/" class="paragraph">Referencia</a>   
            </div>
        </section>
    </div>
    )

}

export default Glosary;