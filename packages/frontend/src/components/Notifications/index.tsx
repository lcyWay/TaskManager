import React from "react";
import { observer } from "mobx-react-lite";

import { NotificationsStorage } from "storages/NotificationsStorage";

import NotificationItem from "./NotificationItem";

import { notificationsContainerStyles } from "./style.css";

function Notifications() {
  return (
    <div className={notificationsContainerStyles}>
      {NotificationsStorage.notifications.map((notification, index) => (
        <NotificationItem notification={notification} key={index} />
      ))}
    </div>
  );
}

export default observer(Notifications);
