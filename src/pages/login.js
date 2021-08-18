import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as HashRouter, Router,Switch,Route,Link, Navlink, Redirect, useParams} from "react-router-dom";

import Loginc from "../components/login/Login";


function Login() {
  return (
    <div>
  
     <Loginc />

     </div>
  );
}

export default Login;
