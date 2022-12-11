import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import { Cadastro, Home, Login, Pomodoro } from "../pages"

export const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/pagina-inicial" element={<Home />} />
                <Route path="/entrar" element={<Login />} />
                <Route path="/cadastrar" element={<Cadastro />} />
                <Route path="*" element={<Navigate to="/pagina-inicial"/>} />
                <Route path="/pomodoro" element={<Pomodoro />} />
            </Routes>
        </BrowserRouter>
    )
}