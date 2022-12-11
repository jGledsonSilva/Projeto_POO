import { TextField, Button } from '@mui/material';
import { BaseLayout } from "../../shared/components/layouts/BaseLayout";
import React, {useState, useContext} from "react";
import { AuthContext } from '../../contexts/auth';
import './styles.css';

export const Login = () => {
  const { authenticated, login } = useContext (AuthContext);
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit", authenticated, { email, password});
  
    login(email, password)
  };

  return (
    <BaseLayout>

      <div id='login'>

        <div className='sobre'>
          <div>
            <h2>HealthPomo</h2>
            <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
          </div>

          <div>
            <h2>Pomodoro</h2>
            <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
          </div>

          <div>
            <h2>Sobre</h2>
            <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
          </div>
        </div>

        <form id="formularioLogin" onSubmit={handleSubmit}>
          <h1>Login</h1>
          <Button variant="contained" size="medium" href="#">Entrar com o Google</Button>
          <span>ou</span>
          <TextField
            id="outlined-name"
            label="Usuário ou email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            id="outlined-name"
            label="Senha"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button variant="contained" type='submit' size="medium" href="pagina-inicial">Entrar</Button>
          <div className='cadastro'>
            <span>Não tem uma conta?</span>
            <a href="cadastrar">Cadastre-se</a>
          </div>
        </form>
      </div>
    </BaseLayout>
  )
}

export default Login
