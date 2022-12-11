import { Box } from "@mui/material";
import { useContext } from "react";
import PauseActivateWithHoverClick from "../../../assets/PauseActivateWithHoverClick.png";
import Restart from "../../../assets/Restart.svg";
import ResumeDesactivateWithHoverClick from "../../../assets/ResumeDesactivateWithHoverClick.png";
import { CountDownContext } from "../../contexts/CountDown";
import { styles } from "./styles";

export const TimeAction = () => {

  const {
    startCountDown,
    resetCountDown,
    pauseCountDown
  } = useContext(CountDownContext);

  return (
    <Box sx={styles.buttonsBox}>
      <img src={Restart} style={styles.sideButtons} onClick={resetCountDown}/>
      <img src={PauseActivateWithHoverClick} style={styles.midButtons} onClick={pauseCountDown}/>
      <img src={ResumeDesactivateWithHoverClick} style={styles.sideButtons} onClick={startCountDown}/>
    </Box>
  )
}