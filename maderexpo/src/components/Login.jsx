import React, { useState } from 'react'
import 'firebase/auth';
import {useFirebaseApp, useUser} from 'reactfire';
import '../css/login.css'
import PQRScrud  from './PQRsCrud'
import SolicitudesProducto from './SolicitudesProducto';



function Login(){


    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');

    const firebase=useFirebaseApp();

    const user=useUser();

    const submit= async()=>{
        await firebase.auth().signInWithEmailAndPassword(email,password)
    }

    const logout=async()=>{
        await firebase.auth().signOut();
    }

    return(
        <section id="signIn">
            {
                !user &&
            <div class="signIn_form">
                <h1>INICIAR SESIÓN</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <input type="email" placeholder="user@email.com" id="email" onChange={(ev=> setEmail(ev.target.value))}></input>
                <input type="password" id="password" placeholder="password" onChange={(ev=> setPassword(ev.target.value))}></input>
                <button class="btn btn_dark" type="submit" onClick={submit}>Iniciar</button>
                <div class="links">
                    <a href="/login">¿Olvidaste la contraseña?</a>
                </div>
            </div>
            }
            {
                user &&
                <>
                <section class="login_logeado" translate="no">
                    <div class="part1">
                        <h1 class="title_name" translate="no">Ya estas logeado <br></br>Bienvenido</h1>
                        <button class="btn btn_light"onClick={logout}>Cerrar Sesión</button>
                    </div>
                    <PQRScrud></PQRScrud>
                    <SolicitudesProducto></SolicitudesProducto>
                </section>
                </>
            }
        </section>
    )
}



export default Login;