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
        comentarios: ''
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
            comentarios: ''
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
                <h1 className="title pqr_title">Formulario de productos</h1>
                <h3 className="title pqr_title">En este formulario podras realizar preguntas acerca del producto que ofrecemos</h3>
                <form className="pqrForm" onSubmit={this.handleSubmit}>
                     <span className="mb-3"><label htmlFor="nombre" className="subtitle">Ingrese su nombre:</label> <input className='input inputs_width inputs_white' value={this.state.nombreUsuario} onChange={this.handleChange} type="text" name="nombreUsuario" id="" placeholder="Nombre Completo"></input></span>
                     <span className="mb-3"><label htmlFor="empresa" className="subtitle">Ingrese el nombre de su la empresa:</label> <input className='input inputs_width inputs_white' value={this.state.nombreEmpresa} onChange={this.handleChange} type="text" name="nombreEmpresa" placeholder="Nombre Empresa" id=""></input></span>
                     <span className="mb-3"><label htmlFor="pais" className="subtitle">Seleccione un pais:</label> <input className='input inputs_width inputs_white' value={this.state.pais} onChange={this.handleChange} list="Countries" name="pais" placeholder="Pais"id=""></input></span>
                     <span className="mb-3"><label htmlFor="correo" className="subtitle">Digite un correo electrónico:</label> <input className='input inputs_width inputs_white' value={this.state.correo} onChange={this.handleChange} type="email" name="correo" placeholder="Correo Electronico"id=""></input></span>
                     <span className="mb-3"><label htmlFor="telefono" className="subtitle">Digite un telefono:</label> <input className='input inputs_width inputs_white' value={this.state.telefono} onChange={this.handleChange} type="text" name="telefono" placeholder="Telefono"id=""></input></span>
                     <span className="mb-3"><label htmlFor="espesor" className="subtitle">Digite el espesor de la madera:</label> <input className='input inputs_width inputs_white' value={this.state.espesor} onChange={this.handleChange} list="Espesor" name="espesor"placeholder="Espesor(mm)" id=""></input></span>
                     <span className="mb-3"><label htmlFor="ancho" className="subtitle">Digite el ancho de la madera:</label> <input className='input inputs_width inputs_white' value={this.state.ancho} onChange={this.handleChange} list="Ancho" name="ancho"placeholder="Ancho(mm)" id=""></input></span>
                     <span className="mb-3"><label htmlFor="largo" className="subtitle">Digite el largo de la madera:</label> <input className='input inputs_width inputs_white' value={this.state.largo} onChange={this.handleChange} type="number" name="largo" placeholder="Largo(mm)"id=""></input></span>
                     <span className="mb-3"> <textarea className='solicitudInput inputs_white' value={this.state.comentarios} onChange={this.handleChange} type="text" name='comentarios' placeholder='Comentarios adicionales'></textarea></span>
                    <button className='btn btn_dark'>Enviar datos</button>
                </form>
            </div>
        )
    }
}
export default ProductFormulary ;