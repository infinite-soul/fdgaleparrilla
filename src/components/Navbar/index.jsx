import React from "react";
import CartWidget from "../CartWidget";
import './Navbar.css';

export const Navbar = () => {
    return (
        <nav className="navbar navbar-dark navbar-expand-lg">
            <div>
                <h3 className="link_nav" href="#">Fernando Gallego Parrilla</h3>
            </div>
            <ul>
                <li>
                    <a className="link_nav" href="#">Inicio</a>
                </li>
                <li>
                    <a className="link_nav" href="#">Banquetes</a>
                </li>
                <li>
                    <a className="link_nav" href="#">Atención a reuniones</a>
                </li>
                <li>
                    <a className="link_nav" href="#">Asado DIY</a>
                </li>
                <li>
                    <a className="link_nav" href="#">Contacto</a>
                </li>
                <li>
                    <CartWidget />                    
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
