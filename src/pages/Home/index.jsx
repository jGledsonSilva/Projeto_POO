import { Button } from "@mui/material"
import { useNavigate } from "react-router-dom";
import { BaseLayout } from "../../shared/components/layouts/BaseLayout";

export const Home = () => {
  const history = useNavigate();

  const cadastrar = () => {
    history('/cadastrar')
  }
  const login = () => {
    history('/login')
  }

  return (
    <BaseLayout>
      <div className="Home">
        <h1>Você está na página inicial</h1>
        <Button onClick={cadastrar}>Cadastra-se</Button>
        <Button onClick={login}>Fazer login</Button>
      </div>
    </BaseLayout>
  )
}

export default Home
