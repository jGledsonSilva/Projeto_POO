import { Box, Typography, Button } from "@mui/material";
import LongRest from "../../../assets/LongRest.svg";
import ShortRest from "../../../assets/ShortRest.svg";
import Pomodoro from "../../../assets/Pomodoro.svg";
import { styles } from "./styles";

export const PomodoroNavigation = () => {

  return (
    <Box sx={styles.navBox}>
      <Button sx={styles.navItems}>
        <img src={Pomodoro} />
        <Typography fontSize="14px">Pomodoro</Typography>
      </Button>
      <Button sx={styles.navItems}>
        <img src={ShortRest} />
        <Typography fontSize="14px">Pausa Curta</Typography>
      </Button>
      <Button sx={styles.navItems}>
        <img src={LongRest} />
        <Typography fontSize="14px">Pausa Longa</Typography>
      </Button>
    </Box>
  )
}