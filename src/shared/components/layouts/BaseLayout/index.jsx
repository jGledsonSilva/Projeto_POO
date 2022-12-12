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
          <img src={Logo} width="24px" />
          <Typography sx={styles.logoTitle}>
            <Typography sx={styles.titleColor}>Health</Typography>Pomo
          </Typography>
        </Box>
      </Box>
      <Box id="body-background" sx={styles.bodyBackground}>
        {children}
      </Box>
      <Box sx={styles.spotify}>
        <iframe id="spotify" width="100%" height="80" frameborder="0" allowfullscreen="" data-src="https://open.spotify.com/embed/playlist/4Zjli1P13J5mmSCD5iKAXK?theme=0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
      </Box>
    </Box>
  )
}