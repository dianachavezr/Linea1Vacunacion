import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as HashRouter, Router,Switch,Route,Link, Navlink, Redirect, useParams} from "react-router-dom";

import Header from "../components/header/header";
import Viewpaciente from "../components/cardviewpaciente/cardviewpaciente";
import Footer from "../components/footer/footer";


function Viewpaciente1() {
  return (
    <div>
     <Header />
     <Viewpaciente />
     
 

     </div>
  );
}

export default Viewpaciente1;