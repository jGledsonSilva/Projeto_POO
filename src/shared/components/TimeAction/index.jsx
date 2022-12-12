import { Box, Button } from "@mui/material";
import { useContext } from "react";
import PauseActivateWithHoverClick from "../../../assets/PauseActivateWithHoverClick.png";
import ResumeDesactivateWithHoverClick from "../../../assets/ResumeDesactivateWithHoverClick.png";
import { CountDownContext } from "../../contexts/CountDown";
import { styles } from "./styles";
import { Restart } from "../Restart/index";
import { Pause } from "../Pause";
import { Resume } from "../Resume";
import { Skip } from "../Skip";

export const TimeAction = () => {

  const {
    startCountDown,
    resetCountDown,
    pauseCountDown,
    skipTenSeconds,
    isActive,
    isRestTime
  } = useContext(CountDownContext);

  return (
    <Box sx={styles.buttonsBox}>
      <Button onClick={resetCountDown}>
        <Restart color={isRestTime ? "#F21616" : "#84D5DA"} />
      </Button>
      <Button onClick={isActive ? pauseCountDown: startCountDown} sx={styles.midButtons}>
        {isActive ? (
          <Pause color={isRestTime ? "#F21616" : "#4DCBD3"} />
        ) : (
          <Resume color={isRestTime ? "#F21616" : "#4DCBD3"} />
        )}
      </Button>
      <Button onClick={skipTenSeconds}>
        <Skip color={isRestTime ? "#F21616" : "#84D5DA"} />
      </Button>
    </Box>
  )
}