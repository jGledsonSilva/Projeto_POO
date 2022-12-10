import { Button, Paper, Typography } from "@mui/material"
import { Box } from "@mui/system";
import { Styles } from "./styles"
import { BaseLayout } from "../../shared/components/layouts/BaseLayout";

export const Home = () => {

  return (
    <BaseLayout>
      <Box sx={Styles.background}>
        <Box sx={Styles.conteiner}>
          <Paper elevation={10} sx={Styles.paper}>
            <Typography variant="h5" sx={Styles.h1}>
              Você está na página inicial
            </Typography>
            <Button variant="contained" size="large" href="entrar">Entrar</Button>
          </Paper>
        </Box>
      </Box>
    </BaseLayout>
  )
}

export default Home
