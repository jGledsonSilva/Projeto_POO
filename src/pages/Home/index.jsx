import { Button, Paper, Typography } from "@mui/material"
import { Box } from "@mui/system";
import { Styles } from "./styles"
import { BaseLayout } from "../../shared/components/layouts/BaseLayout";
import { useNavigate } from "react-router";

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
