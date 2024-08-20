import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Contactos } from "./views/Contactos";
import { Formulario } from "./views/Formulario";
import injectContext from "./store/appContext";

const Layout = () => {
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
					<Routes>
						<Route path="/" element={<Contactos />} />
						<Route path="/Formulario" element={<Formulario />} />
						<Route path="*" element={<h1>Not found!</h1>} />
					</Routes>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
