import React from "react";
import { observer } from "mobx-react-lite";

import CreateLinkedIcon from "icons/task-linked-create.svg?react";

import Tooltip from "primitives/Tooltip";
import IconButton from "primitives/IconButton";
import CustomIcon from "primitives/CustomIcon";

function CreateLinkedTask() {
  return (
    <Tooltip content="Создать дочернюю задачу">
      <IconButton icon={<CustomIcon icon={<CreateLinkedIcon />} />} />
    </Tooltip>
  );
}

export default observer(CreateLinkedTask);
