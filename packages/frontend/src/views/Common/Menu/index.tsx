import React from "react";
import { observer } from "mobx-react-lite";

import FolderIcon from "icons/folder.svg?react";

import Card from "components/Card";
import CardGroup from "components/CardGroup";

import Divider from "primitives/Divider";
import LoadingContainer from "primitives/LoadingContainer";

import { TasksStorage } from "storages/TasksStorage";
import { LocationStorage, ROOT_LOCATION } from "storages/LocationStorage";

import MenuItem from "./MenuItem";

import { menuStyles, menuBlockStyles } from "./style.css";

function Menu() {
  const handleRootClick = React.useCallback(() => LocationStorage.changeLocation(ROOT_LOCATION), []);

  const isRootFetching = LocationStorage.isRootLocation && !LocationStorage.isLocationFetched;

  return (
    <div className={menuStyles}>
      <div className={menuBlockStyles}>
        <CardGroup>
          <Card
            title="Главная"
            icon={<FolderIcon />}
            onClick={handleRootClick}
            selected={LocationStorage.isRootLocation}
          />
        </CardGroup>
      </div>
      <Divider variant="horizontal" />
      {isRootFetching ? (
        <LoadingContainer size="large" />
      ) : (
        <div className={menuBlockStyles}>
          {TasksStorage.cachedChildTasks(ROOT_LOCATION).map((task) => {
            if (!task.children) return null;
            return (
              <CardGroup key={task.id}>
                <MenuItem task={task} />
              </CardGroup>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default observer(Menu);
