import { styles } from "./styles";
import { Box, Typography } from "@mui/material";
import { useContext } from "react";
import { CountDownContext } from "../../contexts/CountDown";

export const Clock = () => {

  const {
    seconds,
    minutes,
    isRestTime
  } = useContext(CountDownContext);

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');

  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

  return (
    <Box sx={isRestTime ? styles.restBox : styles.focusBox}>
      <Typography sx={styles.typography}>{minuteLeft}{minuteRight}:{secondLeft}{secondRight}</Typography>
    </Box>
  )
}