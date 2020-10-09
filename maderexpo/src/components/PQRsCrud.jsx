import React, { Component } from "react";
import "../css/PQRsCrud.css";
import Solicitudes from "./Solicitudes";

class PQRsCrud extends Component {
  
  render() {
    return (
      <>
        <h3 className="title solicitudesTitle">Solicitudes realizadas</h3>
        <Solicitudes/>
      </>
    );
  }
}
export default PQRsCrud;
