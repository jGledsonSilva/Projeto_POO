import { Box, Typography, Button } from "@mui/material";
import LongRest from "../../../assets/LongRest.svg";
import ShortRest from "../../../assets/ShortRest.svg";
import Pomodoro from "../../../assets/Pomodoro.svg";
import { styles } from "./styles";
import { useContext } from "react";
import { CountDownContext } from "../../contexts/CountDown";

export const PomodoroNavigation = () => {

  const {
    shortRestTime,
    longRestTime,
    resetCountDown
  } = useContext(CountDownContext);

  return (
    <Box sx={styles.navBox}>
      <Button sx={styles.navItems} onClick={resetCountDown}>
        <img src={Pomodoro} />
        <Typography fontSize="14px">Pomodoro</Typography>
      </Button>
      <Button sx={styles.navItems} onClick={shortRestTime}>
        <img src={ShortRest} />
        <Typography fontSize="14px">Pausa Curta</Typography>
      </Button>
      <Button sx={styles.navItems} onClick={longRestTime}>
        <img src={LongRest} />
        <Typography fontSize="14px">Pausa Longa</Typography>
      </Button>
    </Box>
  )
}