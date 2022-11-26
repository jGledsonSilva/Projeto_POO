import { Button } from "@mui/material"
import { useNavigate } from "react-router-dom";


export const Home = () => {
const history = useNavigate();

const handleClick = () => {
  history('/cadastrar')
}

    return (
      <div className="Home">
        <h1>Você está na página inicial</h1>
        <Button onClick={handleClick}>Cadastra-se</Button>
      </div>
  )
}

export default Home
