import React, { Component } from "react";
import "../css/ResponderSolicitud.css";

class ResponderSolicitud extends Component {
  constructor(props) {
    super(props);
    this.state = {
      solicitud: JSON.parse(window.localStorage.getItem("solicitudes")).find(
        (element) => {
          return element.inputNombre === this.props.idSolicitud;
        }
      ),
      refRespuesta: React.createRef(),
      enableResponderClass: "enabled",
    };
  }

  respuestasStorage = [];

  handleSubmit = (e) => {
    e.preventDefault();
    const { refRespuesta, solicitud } = this.state;
    this.respuestasStorage.push({
      correo: solicitud.inputCorreo,
      subject: `Respuesta a la petición de ${solicitud.inputNombre} sobre ${solicitud.tipoSolicitud}`,
      body: refRespuesta.current.value,
    });
    window.localStorage.setItem(
      "respuestas",
      JSON.stringify(this.respuestasStorage)
    );
    if (this.state.enableResponderClass === "enabled") {
      this.setState({ enableResponderClass: "disabled" });
    } else if (this.state.enableResponderClass === "disabled") {
      this.setState({ enableResponderClass: "enabled" });
    }

    window.open(
      `mailto:${this.state.solicitud.inputCorreo}?subject=Respuesta a su petición de ${this.state.solicitud.tipoSolicitud}&body=${this.state.refRespuesta.current.value}`
    );
  };
  render() {
    return (
      <div className={`${this.state.enableResponderClass}`}>
        <form onSubmit={this.handleSubmit}>
          <span>
            <label htmlFor="respuestaSolicitud">
              Responder solicitud de {`${this.state.solicitud.inputNombre}`}:
            </label>
            <input
              className="input"
              id="respuestaSolicitud"
              ref={this.state.refRespuesta}
              name="respuestaSolicitud"
              placeholder="Ingrese la respuesta a la solicitud"
            ></input>
          </span>
          <button>Enviar respuesta</button>
        </form>
      </div>
    );
  }
}

export default ResponderSolicitud;
