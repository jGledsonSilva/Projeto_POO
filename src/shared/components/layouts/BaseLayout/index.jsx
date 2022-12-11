import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Logo from "../../../../assets/Logo.svg";
import { styles } from "./styles";

export const BaseLayout = ({ children }) => {
  const navigate = useNavigate();

  return (
    <Box id="body">
      <Box id="header" sx={styles.headerBackground}>
        <Box id="header-logo" sx={styles.bodySpacing}>
          <img src={Logo} width="24px"/>
          <Typography component="span" sx={styles.logoTitle}>
            <Typography component="span" sx={styles.titleColor}>Health</Typography>Pomo
          </Typography>
        </Box>
      </Box>
      <Box id="body-background" sx={styles.bodyBackground}>
        {children}
      </Box>
    </Box>
  )
}