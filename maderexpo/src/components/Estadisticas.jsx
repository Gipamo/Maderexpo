import React, { Component } from "react";
import ResponderSolicitud from "./ResponderSolicitud";
import {db} from '../server/firestore';
import "../css/Solicitudes.css";
import Chart from 'react-google-charts'
import {Link} from 'react-router-dom';

class Estadisticas extends Component {
  state = {
      solicitudesPQR: [],
      solicitudesProducto: [],
      cantidadPQR:[],
      cantidadTotal: 0
  }
  async componentDidMount(){
    const queryPQR = await db.collection('PeticionPQR').get()
    const queryProducto = await db.collection('PeticionProducto').get()
    let productos = []
    let pqrs = []
    let cantidades = {'Empleo':0,'Compra':0,"Pregunta empresa":0,
    "Sugerencias":0,
    "Reclamos":0,
    "Otros":0,
    "Producto":0};
    let cantidad = 0;
    queryPQR.forEach(pqr => {
        pqrs.push(pqr.data())
        cantidades[pqr.data().tipoSolicitud]++
        cantidad++;
    })
    queryProducto.forEach(producto =>{
        productos.push(producto.data())
        cantidades["Producto"]++
        cantidad++;
    })
    this.setState({solicitudesPQR:pqrs,solicitudesProducto:productos,cantidadPQR:cantidades,cantidadTotal:cantidad})
    console.log(cantidades)
  }
  render() {
      return(
          <>
          <section className='container'>
          <h2 className="title text-center mt-5">Estadísticas de Solicitudes</h2>
          <p className="subtitle text-center mt-3">En total tienes: {this.state.cantidadTotal} solicitudes</p>
            <div className='row justify-content-center'>
                <Chart
                    width={'700px'}
                    height={'400px'}
                    chartType="Histogram"
                    className="col-12 mt-5"
                    loader={<div>Loading Chart</div>}
                    data={[
                        ['Tipo Solicitud', 'Solicitudes'],
                        ['Empleo', this.state.cantidadPQR['Empleo']],
                        ['Compra', this.state.cantidadPQR['Compra']],
                        ['Sugerencias', this.state.cantidadPQR['Sugerencias']],
                        ['Reclamos', this.state.cantidadPQR['Reclamos']],
                        ['Otros', this.state.cantidadPQR['Otros']],
                        ['Producto', this.state.cantidadPQR['Producto']],
                        ['Pregunta Empresa', this.state.cantidadPQR['Pregunta empresa']]
                    ]}
                    options={{
                        title: 'Cantidad de solicitudes',
                        legend: { position: 'none' },
                    }}
                    rootProps={{ 'data-testid': '1' }}
                    />
                <Chart
                    width={'700px'}
                    height={'300px'}
                    chartType="PieChart"
                    className="col-12"
                    loader={<div>Loading Chart</div>}
                    data={[
                        ['Tipo Solicitud', 'Cantidad Solicitudes'],
                        ['Empleo', this.state.cantidadPQR['Empleo']],
                        ['Compra', this.state.cantidadPQR['Compra']],
                        ['Sugerencias', this.state.cantidadPQR['Sugerencias']],
                        ['Reclamos', this.state.cantidadPQR['Reclamos']],
                        ['Otros', this.state.cantidadPQR['Otros']],
                        ['Producto', this.state.cantidadPQR['Producto']],
                        ['Pregunta Empresa', this.state.cantidadPQR['Pregunta empresa']]
                    ]}
                    options={{
                        title: 'Porcentaje de solicitudes',
                    }}
                    rootProps={{ 'data-testid': '2' }}
                />
            </div>
            <button className="btn w-25 align-self-center mt-5 btn_dark"><Link to="/login">Volver a las Solicitudes</Link></button>
          </section>
          </>
      )
  }
}

export default Estadisticas;
