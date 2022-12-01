import { TextField, Button, Link } from '@mui/material';
import './styles.css';

let nome;
let senha;

export const Login = () => {
  return (
    <div id='login'>
      
      <div className='sobre'>
        <h2>Sobre</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam saepe ratione inventore culpa quas nobis molestias? Deleniti atque vero nostrum recusandae beatae ducimus! Deleniti, expedita ut. Cupiditate non inventore cum!</p>
        <h2>Pomodoro</h2>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae magnam nesciunt id, fugiat soluta, repellat explicabo ad repudiandae illum suscipit quidem nihil error. Obcaecati voluptatem nulla provident asperiores ipsam est.</p>
        <h2>Outro</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam error necessitatibus voluptates at exercitationem tempore fugiat ratione labore vero possimus quibusdam molestiae, totam sapiente rem, reprehenderit provident pariatur consequatur vitae?</p>
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
        <Button variant="contained" size="large" href="#">Entrar</Button>
        <span>Ainda não tem uma conta?</span>
        <a href="#">Cadastre-se</a>
      </div>
    </div>
  )
}

export default Login
