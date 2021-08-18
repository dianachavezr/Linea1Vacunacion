import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as HashRouter, Router,Switch,Route,Link, Navlink, Redirect, useParams} from "react-router-dom";
import Header from "../components/header/header";
import Nav from "../components/nav/nav";

import Tablavacunacion from "../components/tablavacunacion/tablavacunacion";
import Footer from "../components/footer/footer";

function Vacunacion() {
  return (
    <div>
     <Header />
     <Tablavacunacion />
     <Footer />

     </div>
  );
}

export default Vacunacion;