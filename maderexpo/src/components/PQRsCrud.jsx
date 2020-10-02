import React, { Component } from "react";
import "../css/PQRsCrud.css";
import Solicitudes from "./Solicitudes";

class PQRsCrud extends Component {
  state = {
    solicitudes: JSON.parse(window.localStorage.getItem("solicitudes")),
  };
  render() {
    return (
      <>
        <h3 className="title solicitudesTitle">Solicitudes realizadas</h3>
        <Solicitudes solicitudes={this.state.solicitudes} />
      </>
    );
  }
}
export default PQRsCrud;
