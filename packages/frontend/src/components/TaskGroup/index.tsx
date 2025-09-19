import React from "react";

import { taskGroupStyles } from "./style.css";

interface TaskGroupInterface {
  children: React.ReactNode;
}

function TaskGroup({ children }: TaskGroupInterface) {
  return <div className={taskGroupStyles}>{children}</div>;
}

export default React.memo(TaskGroup);
