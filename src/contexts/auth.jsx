import React, { useState, createContext } from "react"
import { useNavigate } from "react-router-dom"

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const navigate = useNavigate();
    const [user, serUser] = useState(null);

    const login = (email, password) => {
        console.log("login auth", { email, password});

        //api call - vou simular
        const loggedUser = {
            id: "123",
            email,
        };

        localStorage.setItem("user", JSON.stringify(loggedUser));

        if (password === "secret"){
            serUser(loggedUser);
            navigate("/");
        }
    };

    const logout = () => {
        console.log("logout");
        serUser(null);
        navigate("/login");
    };

    return (
        <AuthContext.Provider value={{ authenticated: !!user, user, login, logout}}
        >{children}</AuthContext.Provider>
    );
};