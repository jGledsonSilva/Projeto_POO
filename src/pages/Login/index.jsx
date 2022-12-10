import { TextField, Button } from '@mui/material';
import { BaseLayout } from "../../shared/components/layouts/BaseLayout";
import './styles.css';

let nome;
let senha;

export const Login = () => {
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

        <div id="formularioLogin">
          <h1>Login</h1>
          <Button variant="contained" size="large" href="#">Entrar com o Google</Button>
          <span>ou</span>
          <TextField
            id="outlined-name"
            label="Usuário ou email"
            value={nome}
          />
          <TextField
            id="outlined-name"
            label="Senha"
            value={senha}
          />
          <Button variant="contained" size="large" href="pagina-inicial">Entrar</Button>
          <div className='cadastro'>
            <span>Não tem uma conta?</span>
            <a href="cadastrar">Cadastre-se</a>
          </div>
        </div>
      </div>
    </BaseLayout>
    
  )
}

export default Login
