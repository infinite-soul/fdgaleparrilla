import React from "react";
import CartWidget from "../CartWidget";
import { NavLink } from "react-router-dom";
import logo from '../../img/logo.svg';
import './Navbar.css';

const NavBar = () => {
	return (

		<nav className="navbar navbar-dark navbar-expand-lg">
			<div className="navbar-brand">
				<NavLink className="link_nav" to="/">
					<span>
						<img className="logo" src={logo} alt="logotipo fernando gallego parrilla" />
					</span>
				</NavLink>
			</div>
			<ul className="navbar-nav ms-auto font-weight fs-5">
				<li className="link_nav nav-item nav-link">
					<NavLink className="link_nav" to="/categoria/Pollo">
						Pollo
					</NavLink>
				</li>
				<li className="link_nav nav-item nav-link">
					<NavLink className="link_nav" to="/categoria/Cerdo">
						Cerdo
					</NavLink>
				</li>
				<li className="link_nav nav-item nav-link">
					<NavLink className="link_nav" to="/categoria/Res">
						Res
					</NavLink>
				</li>
				<li className="link_nav nav-item nav-link">
					<NavLink className="link_nav" to="cart">
						<CartWidget />
					</NavLink>
				</li>
			</ul>
		</nav>

	);
};

export default NavBar;
