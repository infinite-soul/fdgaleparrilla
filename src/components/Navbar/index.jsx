
import React from "react";
import CartWidget from "../CartWidget";
import './Navbar.css';
import logo from '../../img/logo.svg'
import { NavLink, Link } from 'react-router-dom'

export const Navbar = () => {
    return (
        <nav className="navbar navbar-dark navbar-expand-lg">
            <Link to='/' className="navbar-brand">
                <span>
                    <img className="logo" src={logo} alt="logotipo fernando gallego parrilla" />
                </span>
            </Link>
            <ul className="navbar-nav ms-auto font-weight fs-5">
                <li className="link_nav nav-item nav-link">
                    <NavLink to={`/category/Pollo`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Pollo</NavLink>
                </li>
                <li className="link_nav nav-item nav-link">
                    <NavLink to={`/category/Cerdo`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Cerdo</NavLink>
                </li>
                <li className="link_nav nav-item nav-link">
                    <NavLink to={`/category/Res`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'} >Res</NavLink>
                </li>
                <li>
                    <CartWidget />
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
