import React, {Component} from 'react';
import {db} from '../server/firestore';
import '../css/App.css';

class ProductFormulary extends Component {
    state = {
        nombreUsuario: '',
        nombreEmpresa: '',
        pais: '',
        correo: '',
        telefono: '',
        espesor:'',
        ancho: '',
        largo:'',
        comentarios: 'Comentarios adicionales'
    }
    cleanBoxes = () => {
        this.setState({
            nombreUsuario: '',
            nombreEmpresa: '',
            pais: '',
            correo: '',
            telefono: '',
            espesor:'',
            ancho: '',
            largo:'',
            comentarios: 'Comentarios adicionales'
        });
      };
    handleChange = (e) =>{
        const {name,value} = e.target;
        this.setState({[name]:value})
    }
    handleSubmit = async (e) =>{
        e.preventDefault();
        const peticionProducto = {
            nombreUsuario: this.state.nombreUsuario,
            nombreEmpresa: this.state.nombreEmpresa,
            pais: this.state.pais,
            correo: this.state.correo,
            telefono: this.state.telefono,
            espesor:this.state.espesor,
            ancho: this.state.ancho,
            largo:this.state.largo,
            comentarios: this.state.comentarios
        }
        await db.collection('PeticionProducto').doc().set({...peticionProducto});
        this.cleanBoxes.apply();
    }
    render(){
        return (
            <div >
                <form className="card" onSubmit={this.handleSubmit}>
                    <h1 className="titulo-form">Formulario de productos</h1>
                    <input value={this.state.nombreUsuario} onChange={this.handleChange} type="text" name="nombreUsuario" id="" placeholder="Nombre Completo"></input>
                    <input value={this.state.nombreEmpresa} onChange={this.handleChange} type="text" name="nombreEmpresa" placeholder="Nombre Empresa" id=""></input>
                    <input value={this.state.pais} onChange={this.handleChange} list="Countries" name="pais" placeholder="Pais"id=""></input>
                    <input value={this.state.correo} onChange={this.handleChange} type="email" name="correo" placeholder="Correo Electronico"id=""></input>
                    <input value={this.state.telefono} onChange={this.handleChange} type="text" name="telefono" placeholder="Telefono"id=""></input>
                    <input value={this.state.espesor} onChange={this.handleChange} list="Espesor" name="espesor"placeholder="Espesor(mm)" id=""></input>
                    <input value={this.state.ancho} onChange={this.handleChange} list="Ancho" name="ancho"placeholder="Ancho(mm)" id=""></input>
                    <input value={this.state.largo} onChange={this.handleChange} type="number" name="largo" placeholder="Largo(mm)"id=""></input>
                    <textarea name="comentarios" id="" cols="30" rows="10" placeholder={this.state.comentarios}></textarea>
                    <button className='btn btn_dark'>Enviar datos</button>
                </form>
            </div>
        )
    }
}
export default ProductFormulary ;