import React, { Component } from "react";
import ResponderSolicitud from "./ResponderSolicitud";
import "../css/Solicitudes.css";

class Solicitudes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      solicitudSeleccionada: false,
      idSolicitud: "",
      solicitudes: props.solicitudes,
    };
  }

  handleClick = (e) => {
    e.preventDefault();
    this.setState({
      solicitudSeleccionada: true,
      idSolicitud: e.target.id,
    });
  };
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
                  <tr key={solicitud.inputNombre}>
                    <td>{solicitud.inputNombre}</td>
                    <td>{solicitud.tipoUsuario}</td>
                    <td>{solicitud.inputPaises}</td>
                    <td>{solicitud.tipoSolicitud}</td>
                    <td>{solicitud.tipoMedida}</td>
                    <td>{solicitud.inputCorreo}</td>
                    <td>{solicitud.inputSolicitud}</td>
                    <td>
                      <button
                        id={solicitud.inputNombre}
                        onClick={this.handleClick}
                      >
                        Responder
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        {this.state.solicitudSeleccionada && (
          <ResponderSolicitud idSolicitud={this.state.idSolicitud} />
        )}
      </>
    );
  }
}

export default Solicitudes;
