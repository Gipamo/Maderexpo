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
      enableResponderClass: 'disabled',
    };
  }
  handleClick = (e) =>{
    if(this.state.enableResponderClass === 'disabled'){
      this.setState({enableResponderClass:'enabled'})
    }else if(this.state.enableResponderClass === 'enabled'){
      this.setState({enableResponderClass:'disabled'})
    }
  }
  async componentDidMount(){
    const solicitud = await db.collection('PeticionPQR').doc(this.state.idSolicitud.toString()).get()
    this.setState({solicitud:solicitud.data()})
  }
  cleanBoxes = () => {
    this.setState({
      respuesta: '',
      enableResponderClass: 'disabled',
    });
  };

  handleChange = (e) => {
    const {name,value} = e.target;
    this.setState({[name]:value});
  }
  handleSubmit = (e) => {
    e.preventDefault();
    window.open(
      `mailto:${this.state.solicitud.correo}?subject=Respuesta a su petición de ${this.state.solicitud.tipoSolicitud}&body=${this.state.respuesta}`
    );
    if (this.state.enableResponderClass === "enabled") {
      this.setState({ enableResponderClass: "disabled" });
    } else if (this.state.enableResponderClass === "disabled") {
      this.setState({ enableResponderClass: "enabled" });
    }
    this.cleanBoxes.apply();
  };
  render() {
    return (
      <>
      <button class="btn btn_light btn_answer_solicitud"id={this.state.idSolicitud} onClick={this.handleClick}>
        Responder
      </button>
      <div className={`${this.state.enableResponderClass}`}>
        <form class="form_btn_answer"onSubmit={this.handleSubmit}>
          <span>
            <label htmlFor="respuestaSolicitud">
              {/* Responder solicitud de {`${this.state.solicitud.nombreUsuario}`}: */}
              Responder solicitud:
            </label>
            <input
              className="input"
              id="respuesta"
              value={this.state.respuesta}
              onChange={this.handleChange}
              name="respuesta"
              placeholder="Ingrese la respuesta a la solicitud"
            ></input>
          </span>
          <button class="btn btn_dark">Enviar respuesta</button>
        </form>
      </div>
      </>
    );
  }
}

export default ResponderSolicitud;
