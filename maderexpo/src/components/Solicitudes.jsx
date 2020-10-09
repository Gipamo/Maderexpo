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
    const query = await db.collection('PeticionPQR').get()
    let solicitudes = []
    query.forEach(solicitud => {
      solicitudes.push({solicitud:solicitud.data(),idSolicitud:solicitud.id})
    })
    this.setState({solicitudes})
  }
  render() {
    return (
      <>
        <div>
          <table>
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Tipo Persona</th>
                <th>País</th>
                <th>Tipo Solicitud</th>
                <th>Medida</th>
                <th>Correo</th>
                <th>Descripción</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {this.state.solicitudes.map((solicitud) => {
                return (
                  <tr key={solicitud.solicitud.nombreUsuario}>
                    <td>{solicitud.solicitud.nombreUsuario}</td>
                    <td>{solicitud.solicitud.tipoUsuario}</td>
                    <td>{solicitud.solicitud.pais}</td>
                    <td>{solicitud.solicitud.tipoSolicitud}</td>
                    <td>{solicitud.solicitud.medida}</td>
                    <td>{solicitud.solicitud.correo}</td>
                    <td>{solicitud.solicitud.solicitud}</td>
                    <td>
                    <ResponderSolicitud idSolicitud={solicitud.idSolicitud}/>
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
