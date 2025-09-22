import React from "react";
import { observer } from "mobx-react-lite";

import ChildIcon from "icons/child.svg?react";
import FolderIcon from "icons/folder.svg?react";
import ExpandIcon from "icons/chevron-down.svg?react";

import Card from "components/Card";

import Loading from "primitives/Loading";
import CustomIcon from "primitives/CustomIcon";
import IconButton from "primitives/IconButton";

import { TasksStorage } from "storages/TasksStorage";
import { LocationStorage } from "storages/LocationStorage";

import { TaskInterface } from "interfaces/task";

import { menuItemLoadingStyles, menuItemStyles } from "./style.css";

interface MenuItemInterface {
  task: TaskInterface;
  space?: number;
}

function MenuItem({ task, space = 0 }: MenuItemInterface) {
  const handleChildClick = React.useCallback(
    async (event: React.MouseEvent) => {
      event.stopPropagation();

      const isChildrenVisible = TasksStorage.expandedTasks.includes(task.id);
      if (!isChildrenVisible && !TasksStorage.isTaskFetched(task.id)) {
        await TasksStorage.fetchChildTasks(task.id);
      }

      TasksStorage.onTaskExpandToggle(task.id);
    },
    [task],
  );

  const handleMenuItemClick = React.useCallback(() => {
    LocationStorage.changeLocation(task.id);
  }, [task]);

  const isSelected = LocationStorage.locationId === task.id;
  const isFetching = TasksStorage.fetchingTasks.includes(task.id);
  const childTasks = TasksStorage.cachedChildTasks(task.id);
  const isChildrenVisible = TasksStorage.expandedTasks.includes(task.id);

  const rightContent =
    task.childrenFolders &&
    (isFetching ? (
      <div className={menuItemLoadingStyles}>
        <Loading />
      </div>
    ) : (
      <IconButton
        size="small"
        onClick={handleChildClick}
        icon={
          <CustomIcon
            icon={
              <ExpandIcon
                style={{
                  transform: `rotate(${isChildrenVisible ? -180 : 0}deg)`,
                  transition: "all 0.2s ease-in-out",
                }}
              />
            }
          />
        }
      />
    ));

  return (
    <>
      <div className={menuItemStyles}>
        {space > 0 && (
          <>
            {space > 1 && <div style={{ width: 28 * (space - 1) - 8 }} />}
            <CustomIcon size="small" icon={<ChildIcon />} />
          </>
        )}
        <Card
          title={task.title}
          selected={isSelected}
          icon={<FolderIcon />}
          rightContent={rightContent}
          onClick={handleMenuItemClick}
        />
      </div>
      {isChildrenVisible &&
        childTasks.map((childTask) => {
          if (!childTask.children) return null;
          return <MenuItem key={childTask.id} task={childTask} space={space + 1} />;
        })}
    </>
  );
}

export default observer(MenuItem);
