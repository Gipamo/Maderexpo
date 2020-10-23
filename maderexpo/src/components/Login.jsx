import React, { useState } from 'react'
import 'firebase/auth';
import {useFirebaseApp, useUser} from 'reactfire';
import '../css/login.css'
import PQRScrud  from './PQRsCrud'
import SolicitudesProducto from './SolicitudesProducto';
import {Link} from 'react-router-dom';


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
            <div className="signIn_form">
                <h1>INICIAR SESIÓN</h1>
                <input type="email" placeholder="user@email.com" id="email" onChange={(ev=> setEmail(ev.target.value))}></input>
                <input type="password" id="password" placeholder="password" onChange={(ev=> setPassword(ev.target.value))}></input>
                <button className="btn btn_dark" type="submit" onClick={submit}>Iniciar</button>
                <div className="links">
                    <a href="/login">¿Olvidaste la contraseña?</a>
                </div>
            </div>
            }
            {
                user &&
                <>
                <section className="login_logeado" translate="no">
                    <div className="part1">
                        <h1 className="title_name" translate="no">Ya estas logeado <br></br>Bienvenido</h1>
                        <button className="btn btn_dark"onClick={logout}>Cerrar Sesión</button>
                    </div>
                    <PQRScrud></PQRScrud>
                    <br/>
                    <SolicitudesProducto></SolicitudesProducto>
                    <br/>
                    <button className="btn btn_dark"><Link to="/estadisticas">Ver Estadísticas</Link></button>
                </section>
                </>
            }
        </section>
    )
}



export default Login;