import { Box } from "@mui/material";
import PauseActivateWithHoverClick from "../../../assets/PauseActivateWithHoverClick.png";
import Restart from "../../../assets/Restart.svg";
import ResumeDesactivateWithHoverClick from "../../../assets/ResumeDesactivateWithHoverClick.png";
import { styles } from "./styles";

export const TimeAction = () => {

  return (
    <Box sx={styles.buttonsBox}>
      <img src={Restart} style={styles.sideButtons}/>
      <img src={PauseActivateWithHoverClick} style={styles.midButtons}/>
      <img src={ResumeDesactivateWithHoverClick} style={styles.sideButtons}/>
    </Box>
  )
}