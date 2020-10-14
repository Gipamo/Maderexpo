import React, { Component } from "react";
import {db} from '../server/firestore';
import "../css/PQRs.css";

class PQRs extends Component {
  tipoSolicitudes = [
    "Pregunta empresa",
    "Pregunta producto",
    "Sugerencias",
    "Reclamos",
    "Compra",
    "Empleo",
    "Otros",
  ];
  tipoMedidas = ["mm"];
  solicitudesStorage = [];
  state = {
    tipoUsuario: "Natural",
    nombreUsuario: "",
    pais: [],
    paises: [],
    tipoSolicitud: "Pregunta empresa",
    medida: "mm",
    correo: "",
    solicitud: "",
    btnEnviar: "Enviar",
    medidaDisabled: "disabled",
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const {
      nombreUsuario,
      tipoUsuario,
      pais,
      tipoSolicitud,
      medida,
      correo,
      solicitud,
    } = this.state;
    await db.collection('PeticionPQR').doc().set({nombreUsuario,tipoUsuario,pais,tipoSolicitud,medida,correo,solicitud});
    this.cleanBoxes.apply();
  };

  handleChange = (e) => {
    const {name,value} = e.target;
    this.setState({ [name]: value });
  };

  cleanBoxes = () => {
    this.setState({
      tipoUsuario: "Natural",
      nombreUsuario: "",
      pais: [],
      tipoSolicitud: "Pregunta empresa",
      correo: '',
      medida: "mm",
      solicitud: "",
      btnEnviar: "Enviar",
      medidaDisabled: "disabled",
    });
  };

  async componentDidMount() {
    const response = await fetch("https://restcountries.eu/rest/v2/all");
    const data = await response.json();
    this.setState({ paises: data });
  }

  componentDidUpdate(prevProps,prevState) {
    if (
      prevState.tipoSolicitud !== this.state.tipoSolicitud &&
      this.state.tipoSolicitud === "Compra"
    ) {
      this.setState({ medidaDisabled: "enabled" });
    } else if (
      prevState.tipoSolicitud !== this.state.tipoSolicitud &&
      this.state.tipoSolicitud !== "Compra"
    ) {
      this.setState({ medidaDisabled: "disabled" });
    }
  }

  render() {
    return (
      <div>
        <h3 className="title pqr_title">Realiza tu petición</h3>
        <form className="pqrForm" onSubmit={this.handleSubmit}>
          <span>
            <label className="subtitle" htmlFor="pais">
              Seleccione un tipo de persona:
            </label>
            <select id="tipoUsuario" name="tipoUsuario"  class="inputs_width" onChange={this.handleChange}>
              <option value="Natural">Natural</option>
              <option value="Juridica">Juridica</option>
            </select>
          </span>
          <span>
            <label className="subtitle" htmlFor="nombre">
              Nombre de la{" "}
              {this.state.tipoUsuario === "Natural" ? " persona:" : " empresa:"}
            </label>
            <input
              id="nombre"
              className="input inputNombre inputs_width inputs_white"
              name="nombreUsuario"
              onChange={this.handleChange}
              placeholder={`Introduce el nombre de la${
                this.state.tipoUsuario === "Natural" ? " persona" : " empresa"
              }`}
              value={this.state.nombreUsuario}
            ></input>
          </span>
          <span>
            <label className="subtitle" htmlFor="pais">
              Seleccione un país:
            </label>
            <select id="pais" name="pais" id="countryId" class="inputs_width" onChange={this.handleChange}>
              {this.state.paises.map((pais) => {
                return (
                  <option key={pais.name} value={pais.name}>
                    {pais.name}
                  </option>
                );
              })}
            </select>
          </span>
          <span>
            <label className="subtitle" htmlFor="peticion">
              Seleccione un tipo de solicitud:
            </label>
            <select
              id="peticion"
              name="tipoSolicitud"
              class="inputs_width"
              onChange={this.handleChange}
            >
              {this.tipoSolicitudes.map((solicitud) => {
                return (
                  <option value={solicitud} key={solicitud}>
                    {solicitud}
                  </option>
                );
              })}
            </select>
          </span>

          <span className={`${this.state.medidaDisabled}`}>
            <label className="input" htmlFor="medida">
              Seleccione un tipo de medida:
            </label>
            <select
              id="medida"
              name="medida"
              onChange={this.handleChange}
            >
              {this.tipoMedidas.map((medida) => {
                return (
                  <option value={medida} key={medida}>
                    {medida}
                  </option>
                );
              })}
            </select>
          </span>
          <span>
            <label htmlFor="correo" className="subtitle">
              Digite un correo electrónico:
            </label>
            <input
              id="correo"
              name="correo"
              className="input inputs_width inputs_white"
              placeholder="Ingrese un correo electrónico"
              type="email"
              onChange={this.handleChange}
              value={this.state.correo}
            ></input>
          </span>
          <span>
            <input
              id="solicitud"
              className="solicitudInput inputs_white"
              name="solicitud"
              onChange={this.handleChange}
              placeholder="Introduzca su solicitud detalladamente"
              value={this.state.solicitud}
            ></input>
            <button className="btn btn_dark">Enviar</button>
          </span>
        </form>
      </div>
    );
  }
}
export default PQRs;
