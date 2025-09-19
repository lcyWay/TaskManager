import React from "react";
import cn from "classnames";

import FolderIcon from "icons/folder.svg?react";

import Indicator from "primitives/Indicator";
import CustomIcon from "primitives/CustomIcon";

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

const TASK_BODY = `Описание группы задач:
  1. Проверить что-то
  2. Посмотреть на еще что-то
  3. Посмотреть на еще что-то
`;

function Task() {
  const selected = false;
  const completed = false;
  return (
    <div className={cn(taskStyles, selected && taskSelectedStyles)}>
      <div className={taskHeaderStyles}>
        <div className={taskHeaderIconStyles}>
          <CustomIcon size="large" color="background" icon={<FolderIcon />} />
        </div>
        <div className={taskHeaderTextStyles}>
          <div className={cn(taskHeaderTitleStyles, completed && taskHeaderTitleCompletedStyles)}>Node.js</div>
          <div className={taskHeaderHintStyles}>4 Задачи</div>
        </div>
        <Indicator checked={completed} />
      </div>
      <div className={taskBodyStyles}>{TASK_BODY}</div>
      <div className={taskFooterStyles}>
        <div className={taskFooterBadgeStyles}>Срочно</div>
        <div className={taskFooterBadgeStyles}>6 Points</div>
      </div>
    </div>
  );
}

export default React.memo(Task);
