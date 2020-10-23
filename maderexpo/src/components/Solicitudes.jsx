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
      <h2>PQR y otros requerimientos</h2>
        <div>
          <table className="login_table subtitle">
            {this.state.solicitudes.map((solicitud) => {
              return (
                <>
                <tr>
                  <th>Nombre</th>
                  <td className="table-border-top">{solicitud.solicitud.nombreUsuario}</td>
                </tr>
                <tr>
                  <th>Tipo persona</th>
                  <td>{solicitud.solicitud.tipoUsuario}</td>
                </tr>
                <tr>
                  <th>País</th>
                  <td>{solicitud.solicitud.pais}</td>
                </tr>
                <tr>
                  <th>Tipo Solicitud</th>
                  <td>{solicitud.solicitud.tipoSolicitud}</td>
                </tr>
                
                <tr>
                  <th>Correo</th>
                  <td>{solicitud.solicitud.correo}</td>
                </tr>
                <tr>
                  <th>Descripción</th>
                  <td>{solicitud.solicitud.solicitud}</td>
                </tr>
                <tr>
                  <th></th>
                  <td className="table_button">
                    <ResponderSolicitud idSolicitud={solicitud.idSolicitud} nombreTabla="PQR"/>
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
