import React, { Component } from "react";
import {db} from '../server/firestore';
import "../css/ResponderSolicitud.css";

class ResponderSolicitud extends Component {
  constructor(props) {
    super(props);
    this.state = {
      idSolicitud: props.idSolicitud,
      solicitud: '',
      respuesta: '',
      enableResponderClass: 'enabled',
    };
  }

  async componentDidMount(){
    const solicitud = await db.collection('PeticionPQR').doc(this.state.idSolicitud.toString()).get()
    this.setState({solicitud:solicitud.data()})
  }

  handleChange = (e) => {
    const {name,value} = e.target;
    this.setState({[name]:value});
  }
  handleSubmit = (e) => {
    e.preventDefault();
    window.open(
      `mailto:${this.state.solicitud.inputCorreo}?subject=Respuesta a su petición de ${this.state.solicitud.tipoSolicitud}&body=${this.state.respuesta}`
    );
    if (this.state.enableResponderClass === "enabled") {
      this.setState({ enableResponderClass: "disabled" });
    } else if (this.state.enableResponderClass === "disabled") {
      this.setState({ enableResponderClass: "enabled" });
    }
  };
  render() {
    return (
      <div className={`${this.state.enableResponderClass}`}>
        <form onSubmit={this.handleSubmit}>
          <span>
            <label htmlFor="respuestaSolicitud">
              Responder solicitud de {`${this.state.solicitud.nombreUsuario}`}:
            </label>
            <input
              className="input"
              id="respuesta"
              onChange={this.handleChange}
              name="respuesta"
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
