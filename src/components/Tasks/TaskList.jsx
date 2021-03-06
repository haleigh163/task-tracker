import { useState } from "react";
import PropTypes from "prop-types";

import { Box, List, ListSubheader, Collapse, IconButton } from "@mui/material";
import { ExpandMore, ExpandLess } from "@mui/icons-material";

import TaskItem from "./TaskItem";

const TaskList = ({ tasks, listName, onDeleteTask, onUpdateTask }) => {
  const [showTasks, setShowTasks] = useState(false);
  const onClickHandler = () => setShowTasks(!showTasks);

  const taskItems = tasks.map((task) => {
    const taskId = task.id;
    return (
      <TaskItem
        key={taskId}
        {...task}
        // onDelete={onDeleteTask}
        // onUpdate={onUpdateTask}
      />
    );
  });

  return (
    <List
      subheader={
        <ListSubheader sx={{ display: "flex" }} onClick={onClickHandler}>
          {listName}
          <span> ({tasks.length})</span>
          <IconButton sx={{ marginLeft: "auto" }}>
            {!showTasks && <ExpandMore />}
            {showTasks && <ExpandLess />}
          </IconButton>
        </ListSubheader>
      }
      sx={{ width: "100%" }}
    >
      <Collapse in={showTasks} timeout={"auto"}>
        {taskItems}
      </Collapse>
    </List>
  );
};

export default TaskList;

TaskList.propTypes = {
  tasksArray: PropTypes.arrayOf(PropTypes.object),
  listName: PropTypes.string,
  showTasks: PropTypes.bool,
};
