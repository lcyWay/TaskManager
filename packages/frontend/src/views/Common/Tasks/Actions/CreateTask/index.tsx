import React from "react";
import { observer } from "mobx-react-lite";

import CreateIcon from "icons/task-create.svg?react";

import Tooltip from "primitives/Tooltip";
import IconButton from "primitives/IconButton";
import CustomIcon from "primitives/CustomIcon";

function CreateTask() {
  return (
    <Tooltip content="Создать задачу">
      <IconButton icon={<CustomIcon icon={<CreateIcon />} />} />
    </Tooltip>
  );
}

export default observer(CreateTask);
