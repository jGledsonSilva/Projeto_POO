import { Button } from "@mui/material"

export const Home = () => {
<<<<<<< HEAD
  return (
    <div className="Home">
          <h1>
            Voce estar na página inicial
          </h1>
          <Button variant="contained" size="large" href="entrar">login</Button>
    </div>
=======
const history = useNavigate();

const handleClick = () => {
  history('/cadastrar')
}

    return (
      <div className="Home">
        <h1>Você está na página inicial</h1>
        <Button onClick={handleClick}>Cadastra-se</Button>
      </div>
>>>>>>> b3b3a2d9e5237d38af78048aaefd5afaeaed23a2
  )
}

export default Home
