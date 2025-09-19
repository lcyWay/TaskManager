import React from "react";

import SprintIcon from "icons/sprint.svg?react";

import Task from "components/Task";
import Card from "components/Card";
import TaskGroup from "components/TaskGroup";
import CardGroup from "components/CardGroup";

import Divider from "primitives/Divider";

import { sidebarStyles, sidebarBlockStyles, sidebarBlockTitleStyles } from "./style.css";

function Sidebar() {
  return (
    <div className={sidebarStyles}>
      <div className={sidebarBlockStyles}>
        <CardGroup>
          <Card icon={<SprintIcon />} title="Спринт #1" hint="15.09 - 28.09" />
        </CardGroup>
      </div>
      <Divider variant="horizontal" />
      <div className={sidebarBlockStyles}>
        <div className={sidebarBlockTitleStyles}>Задача в работе:</div>
        <TaskGroup>
          <Task />
        </TaskGroup>
      </div>
      <Divider variant="horizontal" />
      <div className={sidebarBlockStyles}>
        <div className={sidebarBlockTitleStyles}>Завершенные задачи:</div>
        <TaskGroup>
          <Task />
          <Task />
          <Task />
        </TaskGroup>
      </div>
    </div>
  );
}

export default React.memo(Sidebar);
