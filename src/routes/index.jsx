import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import { Cadastro, Home, Login, Pomodoro } from "../pages"

export const AppRoutes  = () => {
    return (
        <BrowserRouter>
            <AuthProvider>
                <Routes>
                    <Route path="/pagina-inicial" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/cadastrar" element={<Cadastro />} />
                    <Route path="*" element={<Navigate to="/pagina-inicial"/>} />
                <Route path="/pomodoro" element={<Pomodoro />} />
                </Routes>
            </AuthProvider>
        </BrowserRouter>
    )
}