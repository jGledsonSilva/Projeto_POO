import { TextField, Button, Link } from '@mui/material';

export const Login = () => {
  return (
    <div className="Login">
      <h1>Você está na página de login</h1>
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
          label="Senha"
          value={senha}
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
    </div>
  )
}

export default Login
