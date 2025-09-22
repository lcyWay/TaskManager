import React from "react";
import cn from "classnames";

import ErrorIcon from "icons/close.svg?react";
import SuccessIcon from "icons/check.svg?react";

import CustomIcon from "primitives/CustomIcon";

import { NotificationInterface } from "storages/NotificationsStorage";

import { notificationColorVariants, notificationItemIconContainerStyles, notificationItemStyles } from "./style.css";

interface NotificationItemInterface {
  notification: NotificationInterface;
}

function NotificationItem({ notification }: NotificationItemInterface) {
  return (
    <div className={cn(notificationItemStyles, notificationColorVariants[notification.variant])}>
      <div className={notificationItemIconContainerStyles}>
        <CustomIcon
          color={notification.variant === "success" ? "primary" : "error"}
          icon={notification.variant === "success" ? <SuccessIcon /> : <ErrorIcon />}
        />
      </div>
      {notification.text}
    </div>
  );
}

export default React.memo(NotificationItem);
