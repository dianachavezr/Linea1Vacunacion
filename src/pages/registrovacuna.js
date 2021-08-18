import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as HashRouter, Router,Switch,Route,Link, Navlink, Redirect, useParams} from "react-router-dom";
import Header from "../components/header/header";


import Registrovacuna from "../components/registrovacuna/registrovacuna";
import Footer from "../components/footer/footer";



function Registrovacuna1() {
  return (
    <div>
     <Header />
     <Registrovacuna />
     <Footer />

     </div>
  );
}

export default Registrovacuna1;