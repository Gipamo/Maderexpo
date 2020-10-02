import React, { Component } from "react";
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
    inputNombre: "",
    inputPaises: [],
    tipoSolicitud: "Pregunta empresa",
    tipoMedida: "mm",
    inputSolicitud: "",
    btnEnviar: "Enviar",
    medidaDisabled: "disabled",
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const {
      inputNombre,
      tipoUsuario,
      inputPaises,
      tipoSolicitud,
      tipoMedida,
      inputSolicitud,
    } = this.state;
    this.solicitudesStorage.push({
      inputNombre,
      tipoUsuario,
      inputPaises: inputPaises[0].name,
      tipoSolicitud,
      tipoMedida,
      inputSolicitud,
    });

    window.localStorage.setItem(
      "solicitudes",
      JSON.stringify(this.solicitudesStorage)
    );
    this.cleanBoxes.apply();
  };

  handleChange = (e) => {
    this.setState({ tipoUsuario: e.target.value });
  };

  cleanBoxes = () => {
    this.setState({
      tipoUsuario: "Natural",
      inputNombre: "",
      inputPaises: [],
      tipoSolicitud: "Pregunta empresa",
      tipoMedida: "mm",
      inputSolicitud: "",
      btnEnviar: "Enviar",
      medidaDisabled: "disabled",
    });
  };

  async componentDidMount() {
    const response = await fetch("https://restcountries.eu/rest/v2/all");
    const data = await response.json();
    this.setState({ inputPaises: data });
  }

  componentDidUpdate(prevProps, prevState) {
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
        <h3 className="title">Realiza tu petición</h3>
        <form className="pqrForm" onSubmit={this.handleSubmit}>
          <span>
            <label className="subtitle" htmlFor="pais">
              Seleccione un tipo de persona:
            </label>
            <select id="pais" name="country" onChange={this.handleChange}>
              <option value="Natural">Natural</option>
              <option value="Juridica">Juridica</option>
            </select>
          </span>
          <span>
            <label className="subtitle lblNombre" htmlFor="nombre">
              Nombre de la{" "}
              {this.state.tipoUsuario === "Natural" ? " persona:" : " empresa:"}
            </label>
            <input
              id="nombre"
              className="input inputNombre"
              name="nombreUsuario"
              onChange={(e) => this.setState({ inputNombre: e.target.value })}
              placeholder={`Introduce el nombre de la${
                this.state.tipoUsuario === "Natural" ? " persona:" : " empresa:"
              }`}
            ></input>
          </span>
          <span>
            <label className="subtitle lblPais" htmlFor="pais">
              Seleccione un país:
            </label>
            <select
              id="pais"
              name="country"
              className="inputPais"
              id="countryId"
            >
              {this.state.inputPaises.map((pais) => {
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
              name="peticion"
              onChange={(e) => this.setState({ tipoSolicitud: e.target.value })}
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
              onChange={(e) => this.setState({ tipoMedida: e.target.value })}
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
          <input
            id="solicitud"
            className="solicitudInput"
            name="solicitud"
            onChange={(e) => this.setState({ inputSolicitud: e.target.value })}
            placeholder="Introduzca su solicitud detalladamente"
          ></input>
          <button className="btn_dark">Enviar</button>
        </form>
      </div>
    );
  }
}
export default PQRs;
