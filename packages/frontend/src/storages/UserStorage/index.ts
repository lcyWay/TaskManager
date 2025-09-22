import { computed, makeObservable } from "mobx";

class UserStorageClass {
  constructor() {
    makeObservable(this);
  }

  @computed get isGuestUser() {
    return true;
  }
}

export const UserStorage = new UserStorageClass();
