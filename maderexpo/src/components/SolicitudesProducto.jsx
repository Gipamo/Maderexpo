import React, { Component } from "react";
import ResponderSolicitud from "./ResponderSolicitud";
import {db} from '../server/firestore';
import "../css/Solicitudes.css";

class Solicitudes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      solicitudes: [],
    };
  }
  async componentDidMount(){
    const query = await db.collection('PeticionProducto').get()
    let solicitudes = []
    query.forEach(solicitud => {
      solicitudes.push({solicitud:solicitud.data(),idSolicitud:solicitud.id})
    })
    this.setState({solicitudes})
  }
  render() {
    return (
      <>
      <h2>Interesados en Producto</h2>
      <div>
          <table class="login_table">
            <thead>
              <tr>
                <th>Nombre Persona</th>
                <th>Nombre Empresa</th>
                <th>Correo</th>
                <th>País</th>
                <th>Teléfono</th>
                <th>Correo</th>
                <th>Ancho</th>
                <th>Largo</th>
                <th>Espesor</th>
                <th>Descripción</th>
              </tr>
            </thead>
            <tbody>
              {this.state.solicitudes.map((solicitud) => {
                return (
                  <tr key={solicitud.solicitud.nombreUsuario}>
                    <td>{solicitud.solicitud.nombreUsuario}</td>
                    <td>{solicitud.solicitud.nombreEmpresa}</td>
                    <td>{solicitud.solicitud.correo}</td>
                    <td>{solicitud.solicitud.pais}</td>
                    <td>{solicitud.solicitud.telefono}</td>
                    <td>{solicitud.solicitud.correo}</td>
                    <td>{solicitud.solicitud.ancho}</td>
                    <td>{solicitud.solicitud.largo}</td>
                    <td>{solicitud.solicitud.espesor}</td>
                    <td>{solicitud.solicitud.comentarios}</td>
                    <td class="table_button">
                    <ResponderSolicitud idSolicitud={solicitud.idSolicitud} nombreTabla="Producto"/>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </>
    );
  }
}

export default Solicitudes;
