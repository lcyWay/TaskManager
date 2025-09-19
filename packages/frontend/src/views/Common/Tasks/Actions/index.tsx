import React from "react";

import Divider from "primitives/Divider";

import EditTask from "./EditTask";
import MoveTask from "./MoveTask";
import CreateTask from "./CreateTask";
import DeleteTask from "./DeleteTask";
import CompleteTask from "./CompleteTask";
import CreateLinkedTask from "./CreateLinkedTask";

import { tasksActionsContainerStyles, tasksActionsStyles } from "./style.css";

function TasksActions() {
  return (
    <div className={tasksActionsContainerStyles}>
      <div className={tasksActionsStyles}>
        <CreateTask />
        <CreateLinkedTask />
        <EditTask />
        <DeleteTask />
        <Divider size={24} variant="vertical" />
        <CompleteTask />
        <MoveTask />
      </div>
    </div>
  );
}

export default React.memo(TasksActions);
