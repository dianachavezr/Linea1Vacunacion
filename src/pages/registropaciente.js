import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as HashRouter, Router,Switch,Route,Link, Navlink, Redirect, useParams} from "react-router-dom";
import Header from "../components/header/header";


import Registropaciente from "../components/registropaciente/registropaciente";
import Footer from "../components/footer/footer";


function Registropaciente1() {
  return (
    <div>
     <Header />
     <Registropaciente />
     <Footer />

     </div>
  );
}

export default Registropaciente1;