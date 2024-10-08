import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/Formulario.css";

export const Formulario = () => {
	const { store, actions } = useContext(Context);

	const [fullName, setFullName] = useState("");
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");
	const [address, setAddress] = useState("");
	
	const navigate = useNavigate();

	// Rellenar el formulario si estamos en modo edición
	useEffect(() => {
		if (store.contactToEdit) {
			setFullName(store.contactToEdit.name);
			setEmail(store.contactToEdit.email);
			setPhone(store.contactToEdit.phone);
			setAddress(store.contactToEdit.address);
		}
	}, [store.contactToEdit]);

	const handleSubmit = (e) => {
		e.preventDefault();

		const contactoActualizado = {
			name: fullName,
			phone: phone,
			email: email,
			address: address,
		};

		if (store.contactToEdit) {
			// Editar contacto existente
			actions.editarContacto(store.contactToEdit.id, contactoActualizado);
		} else {
			// Crear nuevo contacto
			actions.crearContacto(contactoActualizado);
		}

		// Limpiar el contacto en edición y regresar a la lista de contactos
		actions.clearContactToEdit();
		navigate("/");
	};

	return (
		<div className="container mt-5">
			<h2>Add a new contact</h2>
			<form onSubmit={handleSubmit}>
				<label htmlFor="fullName">Full Name</label>
				<input type="text" id="fullName" value={fullName} placeholder="Full Name" onChange={(e) => setFullName(e.target.value)} required />

				<label htmlFor="email">Email</label>
				<input type="email" id="email" value={email} placeholder="Email" onChange={(e) => setEmail(e.target.value)} required />

				<label htmlFor="phone">Phone</label>
				<input type="tel" id="phone" value={phone} placeholder="Phone" onChange={(e) => setPhone(e.target.value)} required />

				<label htmlFor="address">Address</label>
				<input type="text" id="address" value={address} placeholder="Address" onChange={(e) => setAddress(e.target.value)} required />

				<button type="submit">Guardar</button>
			</form>
			<br />
			<Link to="/">
				<p className="btn btn-primary">or get back to contacts</p>
			</Link>
		</div>
	);
};

