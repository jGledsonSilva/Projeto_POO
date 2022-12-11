import { Box, Button } from "@mui/material";
import { useContext } from "react";
import Skip from "../../../assets/Skip.svg";
import Restart from "../../../assets/Restart.svg";
import PauseActivateWithHoverClick from "../../../assets/PauseActivateWithHoverClick.png";
import ResumeDesactivateWithHoverClick from "../../../assets/ResumeDesactivateWithHoverClick.png";
import { CountDownContext } from "../../contexts/CountDown";
import { styles } from "./styles";

export const TimeAction = () => {

  const {
    startCountDown,
    resetCountDown,
    pauseCountDown,
    skipTenSeconds,
    isActive
  } = useContext(CountDownContext);

  return (
    <Box sx={styles.buttonsBox}>
      <Button onClick={resetCountDown}>
        <img src={Restart} style={styles.sideButtons}/>
      </Button>
      <Button onClick={isActive ? pauseCountDown: startCountDown} sx={styles.midButtons}>
        <img src={isActive ? PauseActivateWithHoverClick : ResumeDesactivateWithHoverClick} style={styles.midButtons}/>
      </Button>
      <Button onClick={skipTenSeconds}>
        <img src={Skip} style={styles.sideButtons}/>
      </Button>
    </Box>
  )
}