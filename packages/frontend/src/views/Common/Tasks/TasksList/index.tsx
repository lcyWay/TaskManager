import React from "react";

import Task from "components/Task";

import { taskContainerStyles, tasksListStyles } from "./style.css";

function TasksList() {
  return (
    <div className={tasksListStyles}>
      <div className={taskContainerStyles}>
        <Task />
      </div>
      <div className={taskContainerStyles}>
        <Task />
      </div>
      <div className={taskContainerStyles}>
        <Task />
      </div>
      <div className={taskContainerStyles}>
        <Task />
      </div>
      <div className={taskContainerStyles}>
        <Task />
      </div>
    </div>
  );
}

export default React.memo(TasksList);
