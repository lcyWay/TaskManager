import React from "react";
import { observer } from "mobx-react-lite";

import MoveIcon from "icons/task-move.svg?react";

import Tooltip from "primitives/Tooltip";
import IconButton from "primitives/IconButton";
import CustomIcon from "primitives/CustomIcon";

function MoveTask() {
  return (
    <Tooltip content="Поместить задачу в работу">
      <IconButton icon={<CustomIcon icon={<MoveIcon />} />} />
    </Tooltip>
  );
}

export default observer(MoveTask);
