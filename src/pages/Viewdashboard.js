import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as HashRouter, Router,Switch,Route,Link, Navlink, Redirect, useParams} from "react-router-dom";

import Header from "../components/header/header";
import Viewdashboard from "../components/cardviewdashboard/cardviewdashboard";
import Footer from "../components/footer/footer";


function Viewdashboard1() {
  return (
    <div>
     <Header />
     <Viewdashboard />
     
 

     </div>
  );
}

export default Viewdashboard1;