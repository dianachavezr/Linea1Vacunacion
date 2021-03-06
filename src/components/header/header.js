
import {BrowserRouter as HashRouter, Router,Switch,Route,Link, Navlink, Redirect, useHistory} from "react-router-dom";

import usuario from "../../assets/images/usuario-de-perfil.png"
import cerrarsesion from "../../assets/images/cerrar-sesion.png"
import logo from "../../assets/images/logo-forja.png";

import './header.css';



function Header() {
  return (

    <header className="row1 align  items-center text-center text-md-start">
    <div className="logo">
    <img className="img-fluid" src={logo} />   
    </div>

     <div id="botones" >
    
    <div className="usuario">
    <a><img src={usuario} alt="usuario" width="40px"/><p><span>DOCTOR</span><br/>Orlando Perez</p></a>
  </div>

    <div className="usuario">
    <a ><img src={cerrarsesion} alt="usuario" width="40px"/><Link to={`/`}><p><span>Cerrar sesion</span></p></Link></a>
   </div>

    </div>
   
     </header>
 
  );
}


export default Header;

