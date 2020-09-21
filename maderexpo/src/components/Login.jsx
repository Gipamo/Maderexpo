import React from 'react'
import '../App.css'
import '../css/login.css'



function Login(){

    return(
        <section id="signIn">
            <div>
                <h1>INICIAR SESIÓN</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <input type="email" placeholder="user@email.com"></input>
                <input type="password" placeholder="password"></input>
                <button class="btn btn_dark">Iniciar</button>
                <div class="links">
                    <a href="">¿Olvidaste la contraseña?</a>
                </div>
            </div>
        </section>
    )
}



export default Login;