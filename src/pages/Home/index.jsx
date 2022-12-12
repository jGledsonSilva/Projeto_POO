import { Button } from "@mui/material"
import { useNavigate } from "react-router-dom";
import { BaseLayout } from "../../shared/components/layouts/BaseLayout";

export const Home = () => {
  const history = useNavigate();

  return (
    <BaseLayout>
      <div className="Home">
        <h1>Você está na página inicial</h1>
      </div>
    </BaseLayout>
  )
}

export default Home
