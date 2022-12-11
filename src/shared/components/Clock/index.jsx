import { styles } from "./styles";
import { Box } from "@mui/material";
import { useContext } from "react";
import { CountDownContext } from "../../contexts/CountDown";

export const Clock = () => {

  const {
    seconds,
    minutes
  } = useContext(CountDownContext);

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');

  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

  return (
    <Box sx={styles.borderBox}>
      <p>{minuteLeft}{minuteRight}:{secondLeft}{secondRight}</p>
    </Box>
  )
}