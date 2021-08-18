import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as HashRouter, Router,Switch,Route,Link, Navlink, Redirect, useParams} from "react-router-dom";

import Header from "../components/header/header";
import Viewvacuna from "../components/cardviewvacuna/cardviewvacuna";
import Footer from "../components/footer/footer";


function Viewvacuna1() {
  return (
    <div>
     <Header />
     <Viewvacuna />
     
 

     </div>
  );
}

export default Viewvacuna1;