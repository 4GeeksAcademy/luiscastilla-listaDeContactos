import React, { useContext } from "react";
import "../../styles/Contactos.css";
import UserCard from "../component/UserCard";
import { Context } from "../store/appContext";

export const Contactos = () => {
    const { store } = useContext(Context);

    return (
        <div className="text-center mt-5">
            {store.contacts.map((contact, index) => (
                <UserCard key={index} contact={contact} />
            ))}
        </div>
    );
};