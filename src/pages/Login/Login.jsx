import { Button, Paper, Typography } from "@mui/material"
import { Box } from "@mui/system"
import { Styles } from "./styles"


export const Login = () => {
  return (
    <Box sx={Styles.background}>
      <Box sx={Styles.conteiner}>
        <Paper elevation={10} sx={Styles.paper}>
          <Typography variant="h5" sx={Styles.h1}>
            Voce estar na página de login
          </Typography>
          <Button variant="contained" size="large" href="pagina-inicial">Voltar para a página inicial</Button>
          <Button variant="contained" size="large" href="cadastrar">cadastra-se</Button>
        </Paper>
      </Box>
    </Box>
  )
}

export default Login
