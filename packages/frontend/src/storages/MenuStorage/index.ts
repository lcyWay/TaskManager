import { makeObservable } from "mobx";

class MenuStorageClass {
  constructor() {
    makeObservable(this);
  }
}

export const MenuStorage = new MenuStorageClass();
