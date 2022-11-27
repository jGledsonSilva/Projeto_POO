import { Button } from "@mui/material"


export const Login = () => {
    return (
    <div className="Login">
      <h1>Voce estar na página de login</h1>
      <Button variant="contained" size="large"href="cadastrar">cadastra-se</Button>
      <Button variant="contained" size="large" href="pagina-inicial">Voltar para a página inicial</Button>
    </div>
  )
}

export default Login
