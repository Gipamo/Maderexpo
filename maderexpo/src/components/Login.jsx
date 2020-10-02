import React, { useState } from 'react'
import 'firebase/auth';
import {useFirebaseApp, useUser} from 'reactfire';
import '../css/login.css'



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
            
            <div>
                <h1>INICIAR SESIÓN</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <input type="email" placeholder="user@email.com" id="email" onChange={(ev=> setEmail(ev.target.value))}></input>
                <input type="password" id="password" placeholder="password" onChange={(ev=> setPassword(ev.target.value))}></input>
                <Link to="/pqrscrud"><button class="btn btn_dark" type="submit" onClick={submit}>Iniciar</button></Link>
                
                <div class="links">
                    <a href="">¿Olvidaste la contraseña?</a>
                </div>
            </div>
            }
            {
                user && 
                <div>
                    <h1>Te has podido logear correctamente</h1>
                    <button onClick={logout}>cerrar sesion</button>
                
                </div>
            }
        </section>
    )


export default Login;
