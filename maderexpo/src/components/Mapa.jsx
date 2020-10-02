import React from 'react';
import '../css/start.css'
import '../css/map.css'
import GoogleMapReact from 'google-map-react';
import { Marker } from 'google-maps-react';


const Markero = props => {
    return <>
      <div className="pin"></div>
      <div className="pulse"></div>
    </>
  }



function Mapa(){

    const defaultProps = {
        zoom: 11,
        center: {lat: 6.2442876, lng: -75.61623113}
      };



    return(
    <div className="div-map">
        
        
        <div className="mapa" >
        <h2 className="title-map">Mapa de las sedes fisicas </h2>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyDW3VMXiiSQu3Hzd8Q_sPMiHziywHoSVkE" }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
        >
        <Markero
            lat={6.2442876}
            lng={-75.61623113}
        />

        <Markero
            lat={6.2707054}
            lng={-75.5778163}
        />

        <Markero
            lat={6.3351739}
            lng={-75.5609803}
        />
        


        </GoogleMapReact>
      </div>
    </div>
    )

}





export default Mapa;