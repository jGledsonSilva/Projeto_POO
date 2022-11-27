import { Button } from "@mui/material"
import { useNavigate } from "react-router-dom";


export const FormularioLogin = () => {

  const history = useNavigate();

  const handleClick = () => {
    history('/entrar')
  }

  return (

      <div className="FormularioLogin">
        <h1>Login</h1>
        <Button onClick={handleClick}>Entrar com o Google</Button>
        <TextField
          id="outlined-name"
          label="Usuário ou email" 
          value={nome}
          onChange={handleChange}
        />
        <TextField
          id="outlined-name"
          label="Email"
          value={email}
          onChange={handleChange}
        />
        <Button onClick={handleClick}>Entrar</Button>
        <p>Ainda não tem uma conta?</p>
        <Link
          component="button"
          variant="body2"
          onClick={() => {
            console.info("Clicou em cadastrar");
          }}
        >
          Cadastre-se
        </Link>
      </div>
  )
}

export default FormularioLogin
