import React, { useContext } from "react";
import "../../styles/Contactos.css";
import UserCard from "../component/UserCard.jsx";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Contactos = () => {
    const { store } = useContext(Context);

    return (
        <div className="text-center">
            <nav className="navbar navbar-light bg-light mb-3 d-flex justify-content-end me-5">
                    <Link to="/Formulario">
                        <button className="btn btn-primary">Crear Nuevo Contacto</button>
                    </Link>
            </nav>
            {store.contacts.map((contact, index) => (
                <UserCard key={index} contact={contact} />
            ))}
        </div>
    );
};