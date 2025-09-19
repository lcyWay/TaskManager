import React from "react";
import { observer } from "mobx-react-lite";

import DeleteIcon from "icons/task-delete.svg?react";

import Tooltip from "primitives/Tooltip";
import IconButton from "primitives/IconButton";
import CustomIcon from "primitives/CustomIcon";

function DeleteTask() {
  return (
    <Tooltip content="Удалить задачу">
      <IconButton icon={<CustomIcon icon={<DeleteIcon />} />} />
    </Tooltip>
  );
}

export default observer(DeleteTask);
