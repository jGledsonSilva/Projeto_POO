import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import { Cadastro, Home, Login } from "../pages"
import { AuthProvider, AuthContext } from "../contexts/auth";

export const AppRoutes = () => {
    const Private = ({ children }) => {
        const { authenticated } = useContext(AuthContext);
        return authenticated ? children : <Navigate to="/login" />;
    };
    return (
        <BrowserRouter>
            <AuthProvider>
                <Routes>
                    <Route path="/pagina-inicial" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/cadastrar" element={<Cadastro />} />
                    <Route path="*" element={<Navigate to="/pagina-inicial"/>} />
                </Routes>
            </AuthProvider>
        </BrowserRouter>
    )
}