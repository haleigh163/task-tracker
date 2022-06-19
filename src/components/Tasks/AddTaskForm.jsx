import { useState } from "react";
import PropTypes from "prop-types";

import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const AddTaskForm = ({ addTask }) => {
  const [enteredTaskName, setEnteredTaskName] = useState("");
  const [enteredTaskNameError, setEnteredTaskNameError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setEnteredTaskNameError(false);

    if (enteredTaskName.trim() === "") {
      return setEnteredTaskNameError(true);
    }

    addTask(enteredTaskName);
    setEnteredTaskName("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <Stack direction="row" spacing={1}>
        <TextField
          onChange={(e) => setEnteredTaskName(e.target.value)}
          label="Task Name"
          variant="filled"
          required
          fullWidth
          error={enteredTaskNameError}
          value={enteredTaskName}
        />
        <Button type="submit" variant="contained" style={{ width: "30%" }}>
          Add Task!
        </Button>
      </Stack>
    </form>
  );
};

export default AddTaskForm;

AddTaskForm.propTypes = {
  enteredTaskName: PropTypes.string,
  enteredTaskNameError: PropTypes.bool,
};
