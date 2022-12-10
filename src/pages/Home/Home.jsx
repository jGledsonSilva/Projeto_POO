import { Button, Paper, Typography } from "@mui/material"
import { Box } from "@mui/system"
import { Styles } from "./styles"

export const Home = () => {
  return (
    <Box sx={Styles.background}>
      <Box sx={Styles.conteiner}>
        <Paper elevation={10} sx={Styles.paper}>
          <Typography variant="h5" sx={Styles.h1}>
            Você está na página inicial.
          </Typography>
          <Button variant="contained" size="large" href="entrar">login</Button>
        </Paper>
      </Box>
    </Box>
  )
}

export default Home
