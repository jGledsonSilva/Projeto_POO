import { styles } from "./styles";
import { Box } from "@mui/material";

export const Clock = () => {
  return (
    <Box sx={styles.borderBox}>
      <p>25:00</p>
    </Box>
  )
}