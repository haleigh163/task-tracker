import PropTypes from "prop-types";

import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const TaskItem = ({ id, name, isChecked, onDelete, onUpdate }) => {
  return (
    <ListItem
      divider
      disablePadding
      secondaryAction={
        <IconButton
          edge="end"
          aria-label="delete"
          color="primary"
          onClick={() => deleteTask}
        >
          <DeleteIcon />
        </IconButton>
      }
    >
      <ListItemButton dense>
        <ListItemIcon>
          <Checkbox
            edge="start"
            checked={isChecked}
            // onClick={(e) => {
            //   onUpdate(id, "isChecked", !e.target.checked);
            // }}
            icon={<CheckCircleOutlineIcon />}
            checkedIcon={<CheckCircleIcon />}
          />
        </ListItemIcon>
        <ListItemText primary={name} />
      </ListItemButton>
    </ListItem>
  );
};

export default TaskItem;

// TaskItem.propTypes = {
//   id: PropTypes.string.isRequired,
//   name: PropTypes.string.isRequired,
//   isChecked: PropTypes.bool.isRequired,
// };
