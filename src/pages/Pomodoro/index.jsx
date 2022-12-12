import { BaseLayout } from "../../shared/components/layouts/BaseLayout";
import { Clock } from "../../shared/components/Clock";
import { TimeAction } from "../../shared/components/TimeAction";
import { styles } from "./styles";
import { Task } from "../../shared/components/Task";
import { PomodoroNavigation } from "../../shared/components/PomodoroNavigation";

export const Pomodoro = () => {
  return (
    <BaseLayout sx={styles.body}>
      <PomodoroNavigation />
      <Clock/>
      <TimeAction />
      <Task task="Tarefa" stage="0"/>
    </BaseLayout>
  )
}