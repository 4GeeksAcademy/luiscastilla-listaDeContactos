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
			actions.editarContacto(store.contactToEdit.id, contactoActualizado);
		} else {
			actions.crearContacto(contactoActualizado);
		}

		actions.clearContactToEdit();
		navigate("/");
	};

	return (
		<div className="super-contenedor">
			<div className="form-container mt-5">
				<h2 className="form-title">Add a new contact</h2>
				<form onSubmit={handleSubmit} className="contact-form">
					<label htmlFor="fullName">Full Name</label>
					<input type="text" id="fullName" value={fullName} placeholder="Full Name" onChange={(e) => setFullName(e.target.value)} required />

					<label htmlFor="email">Email</label>
					<input type="email" id="email" value={email} placeholder="Email" onChange={(e) => setEmail(e.target.value)} required />

					<label htmlFor="phone">Phone</label>
					<input type="tel" id="phone" value={phone} placeholder="Phone" onChange={(e) => setPhone(e.target.value)} required />

					<label htmlFor="address">Address</label>
					<input type="text" id="address" value={address} placeholder="Address" onChange={(e) => setAddress(e.target.value)} required />

					<button type="submit" className="boton-navbar">Guardar</button>
				</form>
				<br />
				<Link to="/" className="back-link">
					<p className="boton-formulario">or get back to contacts</p>
				</Link>
			</div>
		</div>
	);
};
