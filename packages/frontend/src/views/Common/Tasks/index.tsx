import React from "react";
import { observer } from "mobx-react-lite";

import Task from "components/Task";

import LoadingContainer from "primitives/LoadingContainer";

import { LocationStorage } from "storages/LocationStorage";

import Actions from "./Actions";

import { taskContainerStyles, tasksListStyles, tasksLoadingStyles, tasksStyles } from "./style.css";

function Tasks() {
  if (!LocationStorage.isLocationFetched)
    return (
      <div className={tasksLoadingStyles}>
        <LoadingContainer size="large" />
      </div>
    );

  return (
    <div className={tasksStyles}>
      <Actions />
      <div className={tasksListStyles}>
        {LocationStorage.locationTasks.map((task) => (
          <div className={taskContainerStyles} key={task.id}>
            <Task task={task} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default observer(Tasks);
