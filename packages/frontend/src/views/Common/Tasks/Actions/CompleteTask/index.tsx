import React from "react";
import { observer } from "mobx-react-lite";

import CompleteIcon from "icons/task-complete.svg?react";

import Tooltip from "primitives/Tooltip";
import IconButton from "primitives/IconButton";
import CustomIcon from "primitives/CustomIcon";

function CompleteTask() {
  return (
    <Tooltip content="Завершить задачу">
      <IconButton icon={<CustomIcon icon={<CompleteIcon />} />} />
    </Tooltip>
  );
}

export default observer(CompleteTask);
