import React from "react";
import cn from "classnames";
import { observer } from "mobx-react-lite";

import TaskIcon from "icons/task.svg?react";
import FolderIcon from "icons/folder.svg?react";

import Indicator from "primitives/Indicator";
import CustomIcon from "primitives/CustomIcon";

import { LocationStorage } from "storages/LocationStorage";

import { useDoubleClick } from "hooks/useDoubleClick";

import { TaskInterface } from "interfaces/task";

import {
  taskBodyStyles,
  taskFooterBadgeStyles,
  taskFooterStyles,
  taskHeaderHintStyles,
  taskHeaderIconStyles,
  taskHeaderStyles,
  taskHeaderTextStyles,
  taskHeaderTitleCompletedStyles,
  taskHeaderTitleStyles,
  taskSelectedStyles,
  taskStyles,
} from "./style.css";

interface TaskCardInterface {
  task: TaskInterface;
}

function TaskCard({ task }: TaskCardInterface) {
  const handleTaskDoubleClick = React.useCallback(() => {
    if (!task.children) return;
    LocationStorage.changeLocation(task.id);
  }, [task]);

  const containerRef = useDoubleClick(handleTaskDoubleClick);

  const handleTaskClick = React.useCallback(() => {
    const isSelected = LocationStorage.selectedTask?.id === task.id;
    LocationStorage.changeSelectedTask(isSelected ? null : task);
  }, [task]);

  const isCompleted = task.completed;
  const isSelected = LocationStorage.selectedTask?.id === task.id;

  return (
    <div className={cn(taskStyles, isSelected && taskSelectedStyles)} ref={containerRef} onClick={handleTaskClick}>
      <div className={taskHeaderStyles}>
        <div className={taskHeaderIconStyles}>
          <CustomIcon size="large" color="background" icon={task.children ? <FolderIcon /> : <TaskIcon />} />
        </div>
        <div className={taskHeaderTextStyles}>
          <div className={cn(taskHeaderTitleStyles, isCompleted && taskHeaderTitleCompletedStyles)}>{task.title}</div>
          <div className={taskHeaderHintStyles}>4 Задачи</div>
        </div>
        <Indicator checked={isCompleted} />
      </div>
      <div className={taskBodyStyles}>{task.description}</div>
      <div className={taskFooterStyles}>
        <div className={taskFooterBadgeStyles}>Срочно</div>
        <div className={taskFooterBadgeStyles}>{task.points} Points</div>
      </div>
    </div>
  );
}

export default observer(TaskCard);
