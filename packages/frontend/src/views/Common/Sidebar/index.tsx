import React from "react";

import SprintIcon from "icons/sprint.svg?react";

import Task from "components/Task";
import Card from "components/Card";
import TaskGroup from "components/TaskGroup";
import CardGroup from "components/CardGroup";

import Divider from "primitives/Divider";

import { TaskInterface } from "interfaces/task";

import { sidebarStyles, sidebarBlockStyles, sidebarBlockTitleStyles, cardHintStyles } from "./style.css";

const MOCK_TASK: TaskInterface = {
  id: "1",
  title: "Задача 1",
  points: 10,
  children: false,
  completed: false,
  description: "Описание задачи",
};

function Sidebar() {
  return (
    <div className={sidebarStyles}>
      <div className={sidebarBlockStyles}>
        <CardGroup>
          <Card
            icon={<SprintIcon />}
            title="Спринт #1"
            rightContent={<div className={cardHintStyles}>15.09 - 28.09</div>}
          />
        </CardGroup>
      </div>
      <Divider variant="horizontal" />
      <div className={sidebarBlockStyles}>
        <div className={sidebarBlockTitleStyles}>Задача в работе:</div>
        <TaskGroup>
          <Task task={MOCK_TASK} />
        </TaskGroup>
      </div>
      <Divider variant="horizontal" />
      <div className={sidebarBlockStyles}>
        <div className={sidebarBlockTitleStyles}>Завершенные задачи:</div>
        <TaskGroup>
          <Task task={MOCK_TASK} />
          <Task task={MOCK_TASK} />
          <Task task={MOCK_TASK} />
        </TaskGroup>
      </div>
    </div>
  );
}

export default React.memo(Sidebar);
