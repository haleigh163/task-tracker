import { useEffect } from "react";
import useArray from "../../../custom-hooks/use-array";
import Axios from "axios";

import { v4 as uuid } from "uuid";
import Container from "@mui/material/Container";

import Header from "./components/layout/Header";
import Tasks from "./components/Tasks";

//? NewTaskForm included in Tasks component
// import NewTaskForm from "./components/Tasks/NewTaskForm";
// <NewTaskForm onAddTask={addTaskHandler} />

import { PropTypes } from "prop-types";

const URL = "https://jsonplaceholder.typicode.com/users/1/todos";

function App() {
  const [tasks, updateTasks] = useArray(DUMMY_TASKS);

  useEffect(() => {
    const x = Axios.get(URL).then((res) => {
      updateTasks.set(res.data);
    });
  }, [tasks]);

  const addTaskHandler = (newTaskName) => {
    const newTask = { id: uuid(), name: newTaskName, isChecked: false };
    updateTasks.push(newTask);
  };

  const deleteTaskHandler = (taskId) => {
    updateTasks.removeById(taskId);
  };

  const toggleCheckedHandler = (taskId, isChecked) => {
    updateTasks.updateById(taskId, {
      isChecked: !isChecked ? false : true,
    });
  };

  return (
    <Container maxWidth="sm">
      <Header />
      <Tasks
        tasks={tasks}
        onAddTask={addTaskHandler}
        onDeleteTask={deleteTaskHandler}
        onToggleChecked={toggleCheckedHandler}
      />
    </Container>
  );
}

export default App;

App.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.object),
};

const DUMMY_TASKS = [
  {
    id: uuid(),
    name: "Task 1",
    isChecked: true,
  },
  {
    id: uuid(),
    name: "Task 2",
    isChecked: true,
  },
  {
    id: uuid(),
    name: "Task 3",
    isChecked: false,
  },
];
