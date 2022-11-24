export const Rotas = () => {

    return (
        <BrowserRouter>
            <Switch>
                <Route path="/pagina_inicial" element={<Paginainicial/>} />
                <Route path="/entrar" element={<Login />} />
                <Route path="/teste" element={<Teste />} />
                <Route path="*" element={<Navigate to="/pagina_inicial"/>} />
            </Switch>
        </BrowserRouter>
    )
}