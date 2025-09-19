import React from "react";

import Actions from "./Actions";
import TasksList from "./TasksList";

import { tasksStyles } from "./style.css";

function Tasks() {
  return (
    <div className={tasksStyles}>
      <Actions />
      <TasksList />
    </div>
  );
}

export default React.memo(Tasks);
