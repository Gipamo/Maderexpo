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
      <h2>Interesados en el Producto</h2>
      <div>
          <table class="login_table subtitle">
            {this.state.solicitudes.map((solicitud) => {
              return (
                <>
                <tr>
                  <th>Nombre Persona</th>
                  <td class="table-border-top">{solicitud.solicitud.nombreUsuario}</td>
                </tr>
                <tr>
                  <th>Nombre Empresa</th>
                  <td>{solicitud.solicitud.nombreEmpresa}</td>
                </tr>
                <tr>
                  <th>Correo</th>
                  <td>{solicitud.solicitud.correo}</td>
                </tr>
                <tr>
                  <th>País</th>
                  <td>{solicitud.solicitud.pais}</td>
                </tr>
                <tr>
                  <th>Teléfono</th>
                  <td>{solicitud.solicitud.telefono}</td>
                </tr>
                <tr>
                  <th>Ancho</th>
                  <td>{solicitud.solicitud.ancho}</td>
                </tr>
                <tr>
                  <th>Largo</th>
                  <td>{solicitud.solicitud.largo}</td>
                </tr>
                <tr>
                  <th>Espesor</th>
                  <td>{solicitud.solicitud.espesor}</td>
                </tr>
                <tr>
                  <th>Descripción</th>
                  <td>{solicitud.solicitud.comentarios}</td>
                </tr>
                <tr>
                  <th></th>
                  <td class="table_button">
                    <ResponderSolicitud idSolicitud={solicitud.idSolicitud} nombreTabla="Producto"/>
                  </td>
                </tr>
                <br/>
                </>
              );
            })}
            </table>
        </div>
      </>
    );
  }
}

export default Solicitudes;
