// opensource.com/article/21/3/react-app-hooks

import { useEffect } from "react";
import useArray from "../../../custom-hooks/use-array";
import Axios from "axios";

import { v4 as uuid } from "uuid";
import Container from "@mui/material/Container";

import Header from "./components/layout/Header";
import AddTaskForm from "./components/Tasks/AddTaskForm";
import Tasks from "./components/Tasks";

import { PropTypes } from "prop-types";

const URL = "https://jsonplaceholder.typicode.com/users/1/todos";

function App() {
  const [tasks, updateTasks] = useArray(DUMMY_TASKS);

  // useEffect(() => {

  // const x = Axios.get(URL).then((res) => {
  //   const x = res.data.map((task) => ({ ...task, id: `task-${task.id}` }));
  //   updateTasks.set(x);
  // });
  // }, [tasks]);

  const addTask = (newTaskName) => {
    const newTask = { id: uuid(), name: newTaskName, isChecked: false };
    updateTasks.push(newTask);
  };

  const deleteTask = (taskId) => {
    updateTasks.removeById(taskId);
  };

  const updateTask = (taskId, property, value) => {
    updateTasks.updateById(taskId, property, value);
  };

  return (
    <Container maxWidth="sm">
      <Header />
      <AddTaskForm addTask={addTask} />
      <Tasks tasks={tasks} onDeleteTask={deleteTask} updateTask={updateTask} />
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
