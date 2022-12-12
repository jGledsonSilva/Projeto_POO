import { Box, Button, IconButton, Menu, MenuItem, Typography } from "@mui/material";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import LogoutIcon from '@mui/icons-material/Logout';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import SettingsIcon from '@mui/icons-material/Settings';;
import React from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../../../../assets/Logo.svg";
import { styles } from "./styles";

export const BaseLayout = ({ children }) => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const opene = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloser = () => {
    setAnchorEl(null);
  };

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  
  const login = () => {
    navigate('/entrar')
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
            <React.Fragment>
              <IconButton
                aria-label="more"
                onClick={handleClick}
                size="small"
                aria-controls={opene ? 'account-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={opene ? 'true' : undefined}
              >
                <MoreVertIcon sx={{ color: '#ffffff' }} />
              </IconButton>
              <Menu
                nchorEl={anchorEl}
                id="account-menu"
                open={opene}
                onClose={handleCloser}
                onClick={handleCloser}
                PaperProps={{
                  elevation: 5,
                  sx: {
                    color: '#ffffff',
                    background: '#1A1A1B',
                    overflow: 'visible',
                    filter: 'drop-shadow(#000000)',
                    mt: 1.5,
                    '& .MuiAvatar-root': {
                      width: 32,
                      height: 32,
                      ml: -0.5,
                      mr: 1,
                    },
                    '&:before': {
                      content: '""',
                      display: 'block',
                      position: 'absolute',
                      top: 0,
                      right: 15,
                      width: 10,
                      height: 10,
                      bgcolor: '#1A1A1B',
                      transform: 'translateY(-50%) rotate(45deg)',
                      zIndex: 0,
                    },
                  },
                }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 50 }}
              >
                <MenuItem>
                  <PersonOutlineIcon />Conta
                </MenuItem>
                <MenuItem>
                  <SettingsIcon />Settings
                </MenuItem>
                <MenuItem>
                  <LogoutIcon />Logout
                </MenuItem>
              </Menu>
            </React.Fragment>
          </Box>
        </Box>
      </Box>
      <Box id="body-background" sx={styles.bodyBackground}>
        {children}
      </Box>
    </Box>
  )
}