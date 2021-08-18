import React from 'react';

import {BrowserRouter as HashRouter, Router,Switch,Route,Link, Navlink, Redirect, useParams} from "react-router-dom";
import Header from "../components/header/header";
import Nav from "../components/nav/nav";
import Tabladashboard from "../components/tabladashboard/tabladashboard";
import Footer from "../components/footer/footer";


function Dashboard() {
  return (
    <div>
     <Header />
     <Tabladashboard />
     <Footer />

     </div>
  );
}

export default Dashboard;

