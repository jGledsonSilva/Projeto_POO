import { Box, Typography, Button } from "@mui/material";
import Clock from "../../../assets/Clock.svg";
import Edit from "../../../assets/Edit.svg";
import Trash from "../../../assets/Trash.svg";
import Add from "../../../assets/Add.svg";
import { styles } from "./styles";
import { useContext } from "react";
import { CountDownContext } from "../../contexts/CountDown";
import { useState } from "react";

export const Task = ({task}) => {

  const {
    isFinished
  } = useContext(CountDownContext);

  const [stageNumber, setStageNumber] = useState(0);

  

  return (
    <Box sx={styles.taskWrapper}>
      <Box sx={styles.taskBox}>
        <Typography sx={styles.taskName}>
          {task}
        </Typography>
        <Box sx={styles.taskBox}>
          <Typography sx={styles.taskNumber}>
            {stageNumber}/5
          </Typography>
          <img src={Clock} />
        </Box>
        <img src={Trash} />
        <img src={Edit} />
      </Box>
      <Box>
        <Button>
          <img src={Add}/>
        </Button>
      </Box>
    </Box>
  )
}