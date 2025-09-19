import React from "react";
import { observer } from "mobx-react-lite";

import EditIcon from "icons/task-edit.svg?react";

import Tooltip from "primitives/Tooltip";
import IconButton from "primitives/IconButton";
import CustomIcon from "primitives/CustomIcon";

function EditTask() {
  return (
    <Tooltip content="Изменить задачу">
      <IconButton icon={<CustomIcon icon={<EditIcon />} />} />
    </Tooltip>
  );
}

export default observer(EditTask);
