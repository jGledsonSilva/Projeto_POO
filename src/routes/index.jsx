import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import { Cadastro, Home, Login } from "../pages"

export const Routes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/pagina-inicial" element={<Home />} />
                <Route path="/entrar" element={<Login />} />
                <Route path="/cadastrar" element={<Cadastro />} />
                <Route path="*" element={<Navigate to="/pagina-inicial"/>} />
            </Routes>
        </BrowserRouter>
    )
}