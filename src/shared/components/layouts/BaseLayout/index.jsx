import { Home } from "@mui/icons-material";
import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Logo from "../../../../assets/Logo.svg";
import { styles } from "./styles";

export const BaseLayout = ({ children }) => {
  const navigate = useNavigate();

  const login = () => {
    navigate('/login')
  }
  const home = () => {
    navigate('/pagina-inicial')
  }

  return (
    <Box id="body">
      <Box id="header" sx={styles.headerBackground}>
        <Box onClick={home} id="header-logo" sx={styles.bodySpacing}>
          <img src={Logo} width="24px" />
          <Typography component="span" sx={styles.logoTitle}>
            <Typography component="span" sx={styles.titleColor}>Health</Typography>Pomo
          </Typography>
        </Box>
        <Box id="end">
          <Box id="buttons">
            <Button variant="contained" size='small' onClick={login}>Fazer login</Button>
          </Box>
        </Box>
      </Box>
      <Box id="body-background" sx={styles.bodyBackground}>
        {children}
      </Box>
    </Box>
  )
}