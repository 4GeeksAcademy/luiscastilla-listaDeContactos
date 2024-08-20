import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">Regresar a la lista de contactos</span>
			</Link>
			<div className="ml-auto">
				<Link to="/Formulario">
					<button className="btn btn-primary">Crear Nuevo Contacto</button>
				</Link>
			</div>
		</nav>
	);
};
