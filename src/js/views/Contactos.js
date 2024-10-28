import React, { useContext } from "react";
import "../../styles/Contactos.css";
import UserCard from "../component/UserCard.jsx";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import logo from "../../img/logo.png";

export const Contactos = () => {
    const { store } = useContext(Context);

    return (
        <div className="contact-page text-center">
            <nav className="navbar">
                <div className="logo-titulo">
                    <img src={logo} alt="Logo" className="logo-img" />
                    <h1 className="navbar-title">Lista De Contactos</h1>
                </div>
                <Link to="/Formulario">
                    <button className="boton-navbar">Crear Nuevo Contacto</button>
                </Link>
            </nav>
            {store.contacts.length === 0 ? (
                <p className="no-contacts-message">No hay contactos en la lista. Agrega un nuevo contacto para comenzar.</p>
            ) : (
                store.contacts.map((contact, index) => (
                    <UserCard key={index} contact={contact} />
                ))
            )}
        </div>
    );
};
