import React from "react";
import "../css/App.css";
import Icon from "../img/icono.png";
import { Switch, Route, Link } from "react-router-dom";

function ButtonsRelation() {
  return (
    <div>
      <div className="parent">
        <div className="div1">
          {" "}
          <Link to="/map">
            {" "}
            <img src={Icon} alt="Icono" />
            <br />
            <a href="">Sedes Fisicas</a>{" "}
          </Link>
        </div>
        <div className="div2">
          {" "}
          <Link to="/pqrs">
            <img src={Icon} alt="Icono" />
            <br />
            <a href="">PQRs</a>{" "}
          </Link>
        </div>
        <div className="div3">
          {" "}
          <img src={Icon} alt="Icono" />
          <br />
          <a href="">Glosario</a>{" "}
        </div>
        <div className="div4">
          {" "}
          <img src={Icon} alt="Icono" />
          <br />
          <a href="">Buzon de Sugerencias</a>{" "}
        </div>
        <div className="div6">
          {" "}
          <Link to="/productform">
            {" "}
            <img src={Icon} alt="Icono" />
            <br />
            <a href="">Preguntas del Producto</a>{" "}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ButtonsRelation;
