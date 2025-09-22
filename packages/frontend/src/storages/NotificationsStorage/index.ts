import { action, makeObservable, observable } from "mobx";

export type NotificationVariantType = "success" | "error";

export interface NotificationInterface {
  variant: NotificationVariantType;
  text: string;
}

class NotificationsStorageClass {
  constructor() {
    makeObservable(this);
  }

  @observable notifications: NotificationInterface[] = [];

  @action.bound pushNotification(text: string, variant: NotificationVariantType) {
    const isMessageAlreadyExist = this.notifications.find((notification) => notification.text === text);
    if (isMessageAlreadyExist) return;

    this.notifications.push({ text, variant });
    setTimeout(() => this.notifications.shift(), 5000);
  }
}

export const NotificationsStorage = new NotificationsStorageClass();
