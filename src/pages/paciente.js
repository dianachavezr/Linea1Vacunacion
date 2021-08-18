import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as HashRouter, Router,Switch,Route,Link, Navlink, Redirect, useParams} from "react-router-dom";

import Header from "../components/header/header";
import Nav from "../components/nav/nav";
import Tablapaciente from "../components/tablapaciente/tablapaciente";
import Footer from "../components/footer/footer";


function Paciente() {
  return (
    <div>
     <Header />
     <Tablapaciente />
     <Footer />

     </div>
  );
}

export default Paciente;
