import PropTypes from "prop-types";

import { Box } from "@mui/material";

import TaskList from "./TaskList";

const Tasks = ({ tasks, updateTask, deleteTask }) => {
  return (
    <div>
      <TaskList
        tasks={tasks.filter((task) => !task.isChecked)}
        listName="Incomplete Tasks"
        onUpdateTask={updateTask}
        // onDeleteTask={deleteTask}
      />
      <TaskList
        tasks={tasks.filter((task) => task.isChecked)}
        listName="Completed Tasks"
        onUpdateTask={updateTask}
        // onDeleteTask={onDeleteTask}
      />
    </div>
  );
};

export default Tasks;

Tasks.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.object),
};
