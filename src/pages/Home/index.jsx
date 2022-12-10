import { Button } from "@mui/material"
import { useNavigate } from "react-router-dom";
import { BaseLayout } from "../../shared/components/layouts/BaseLayout";

export const Home = () => {
  const history = useNavigate();

  const handleClick = () => {
    history('/cadastrar')
  }

  return (
    <BaseLayout>
      <div className="Home">
        <h1>Você está na página inicial</h1>
        <Button onClick={handleClick}>Cadastra-se</Button>
      </div>
    </BaseLayout>
  )
}

export default Home
