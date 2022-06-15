import PropTypes from "prop-types";

import { Box } from "@mui/material";

import TaskList from "./TaskList";
import NewTaskForm from "./NewTaskForm";

const Tasks = (props) => {
  const { tasks } = props;

  const completedTasks = tasks.filter((task) => task.isChecked);
  const incompleteTasks = tasks.filter((task) => !task.isChecked);

  return (
    <>
      <Box mt={2}>
        <NewTaskForm onAdd={props.onAddTask} />
      </Box>
      <Box mt={2}>
        <TaskList tasksArray={incompleteTasks} listName="Incomplete Tasks" />
        <TaskList tasksArray={completedTasks} listName="Completed Tasks" />
      </Box>
    </>
  );
};

export default Tasks;

Tasks.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.object),
};
