import React, { useContext } from "react";
import '../../styles/UserCard.css';
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

const UserCard = ({ contact }) => {
    const { actions } = useContext(Context);

    return (
        <div className="user-card">
            <img
                src="https://previews.123rf.com/images/djvstock/djvstock1701/djvstock170102949/69084495-dise%C3%B1o-gr%C3%A1fico-del-ejemplo-del-vector-del-icono-del-perfil-ejecutivo-del-hombre-de-negocios.jpg"
                alt="Profile"
                className="user-card__image"
            />
            <div className="user-card__info">
                <h2>{contact.name}</h2>
                <p><i className="fas fa-map-marker-alt"></i> {contact.address}</p>
                <p><i className="fas fa-phone"></i> {contact.phone}</p>
                <p><i className="fas fa-envelope"></i> {contact.email}</p>
            </div>
            <div className="user-card__actions">
                <Link to="/Formulario">
                    <i className="fas fa-pencil-alt" onClick={() => actions.setContactToEdit(contact)}></i>
                </Link>
                <i className="fas fa-trash" onClick={() => actions.eliminarContacto(contact.id)}></i>
            </div>
        </div>
    );
};

export default UserCard;


