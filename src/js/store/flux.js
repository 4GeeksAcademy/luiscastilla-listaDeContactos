const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            contacts: [],
            contactToEdit: null, 
        },
        actions: {
            setContactToEdit: (contact) => {
                setStore({ contactToEdit: contact });
            },
            clearContactToEdit: () => {
                setStore({ contactToEdit: null });
            },
            crearAgenda: async () => {
                try {
                    const res = await fetch(`https://playground.4geeks.com/contact/agendas/luis_castilla`, {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify([])
                    });
                    if (res.ok) {
                        getActions().cargarContactos(); 
                    } else {
                        console.error("Error al crear la agenda");
                    }
                } catch (error) {
                    console.error("Error al crear la agenda:", error);
                }
            },
            cargarContactos: async () => {
                try {
                    const res = await fetch(`https://playground.4geeks.com/contact/agendas/luis_castilla`);
                    if (!res.ok) {
                        throw new Error("Agenda no encontrada");
                    }
                    const data = await res.json(); 
                    setStore({ contacts: data.contacts });
                } catch (error) {
                    console.error("Error al cargar la lista de contactos:", error);
                    getActions().crearAgenda(); 
                }
            },
            crearContacto: async (nuevoContacto) => {
                try {
                    const res = await fetch(`https://playground.4geeks.com/contact/agendas/luis_castilla/contacts`, {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(nuevoContacto)
                    });
                    if (res.ok) {
                        getActions().cargarContactos(); 
                    } else {
                        console.error("Error al crear el contacto");
                    }
                } catch (error) {
                    console.error("Error al crear el contacto:", error);
                }
            },
            editarContacto: async (id, contactoActualizado) => {
                try {
                    const res = await fetch(`https://playground.4geeks.com/contact/agendas/luis_castilla/contacts/${id}`, {
                        method: "PUT",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(contactoActualizado)
                    });
                    if (res.ok) {
                        getActions().cargarContactos();
                    } else {
                        console.error("Error al editar el contacto");
                    }
                } catch (error) {
                    console.error("Error al editar el contacto:", error);
                }
            },
            eliminarContacto: async (id) => {
                try {
                    const res = await fetch(`https://playground.4geeks.com/contact/agendas/luis_castilla/contacts/${id}`, {
                        method: "DELETE"
                    });
                    if (res.ok) {
                        getActions().cargarContactos(); 
                    } else {
                        console.error("Error al eliminar el contacto");
                    }
                } catch (error) {
                    console.error("Error al eliminar el contacto:", error);
                }
            }
        }
    };
};

export default getState;
