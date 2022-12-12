import { Box, Typography } from "@mui/material";
import Clock from "../../../assets/Clock.svg";
import Edit from "../../../assets/Edit.svg";
import Trash from "../../../assets/Trash.svg";
import { styles } from "./styles";

export const Task = ({task, stage}) => {
  return (
    <Box sx={styles.taskBox}>
      <Typography sx={styles.taskName}>
        {task}
      </Typography>
      <Box sx={styles.taskBox}>
        <Typography sx={styles.taskNumber}>
          {stage}/5
        </Typography>
        <img src={Clock} />
      </Box>
      <img src={Trash} />
      <img src={Edit} />
    </Box>
  )
}