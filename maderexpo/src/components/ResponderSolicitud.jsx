import React, { Component } from "react";
import {db} from '../server/firestore';
import "../css/ResponderSolicitud.css";

class ResponderSolicitud extends Component {
  constructor(props) {
    super(props);
    this.state = {
      idSolicitud: props.idSolicitud,
      tabla: props.nombreTabla,
      solicitud: '',
      respuesta: '',
      enableResponderClass: 'disabled',
      nombreTabla:props.nombreTabla
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
    const solicitud = await db.collection(`Peticion${this.state.nombreTabla}`).doc(this.state.idSolicitud.toString()).get()
    this.setState({solicitud:solicitud.data()});
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
      `mailto:${this.state.solicitud.correo}?subject=Respuesta a su petición de ${this.state.solicitud.tipoSolicitud||"Producto"}&body=${this.state.respuesta}`
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
      <button class="btn btn_light btn_answer_solicitud" onClick={this.handleClick}>
        Responder
      </button>
      <div className={`${this.state.enableResponderClass}`}>
        <form class="form_btn_answer" onSubmit={this.handleSubmit}>
          <span>
            <label htmlFor="respuestaSolicitud">
              Responder solicitud de {`${this.state.solicitud.nombreUsuario}`}:
            </label>
            {/* <input
              className="input"
              id="respuesta"
              value={this.state.respuesta}
              onChange={this.handleChange}
              name="respuesta"
              placeholder="Ingrese la respuesta a la solicitud"
            ></input> */}
          </span>
          <textarea
            name="respuesta"
            className="input"
            id="respuesta"
            value={this.state.respuesta}
            onChange={this.handleChange}
            placeholder="Ingrese la respuesta a la solicitud">
          </textarea>
          <button class="btn btn_dark">Enviar respuesta</button>
        </form>
      </div>
      </>
    );
  }
}

export default ResponderSolicitud;
