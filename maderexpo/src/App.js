import React from 'react';  
import Header from  './components/Header'
import Login from './components/Login'
import Start from './components/Start'
import Who from './components/Who'
import Product from './components/Product'
import Compromise from './components/Compromise'
import Relation from './components/ButtonsRelation'
import ProductFormulary from './components/ProductFormulary'
import Map from './components/Mapa'
import './App.css'; 
import { Switch, Route,Link } from 'react-router-dom'

//poner la ruta del componente encima de la start para que funcione correctamente


function App() {

  return (
    <div className="App">
      <Header/>
      <main>
      <Switch>
          <Route path="/login" component={Login} />
          <Route path="/who" component={Who}/>
          <Route path="/product" component={Product}/>
          <Route path="/compromise" component={Compromise}/>
          <Route path="/relation" component={Relation}/>
          <Route path="/productform" component={ProductFormulary}/>
          <Route path="/map" component={Map}/>
          <Route path="/" component={Start}/>
  
      </Switch>
      </main>

    </div>
  );
}

export default App;
