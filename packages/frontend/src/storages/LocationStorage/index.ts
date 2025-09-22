import { action, computed, makeObservable, observable } from "mobx";

import { TasksStorage } from "storages/TasksStorage";

import { TaskInterface } from "interfaces/task";

export const ROOT_LOCATION = "root";

class LocationStorageClass {
  constructor() {
    makeObservable(this);
    this.changeLocation(ROOT_LOCATION);
  }

  @observable locationId: string = null!;

  @observable.shallow locationTasks: TaskInterface[] = [];
  @observable.shallow selectedTask: TaskInterface | null = null;

  @computed get isRootLocation() {
    return this.locationId === ROOT_LOCATION;
  }

  @computed get isLocationFetched() {
    return Array.isArray(TasksStorage.cache[this.locationId]);
  }

  @action.bound changeSelectedTask(task: TaskInterface | null) {
    this.selectedTask = task;
  }

  @action.bound async changeLocation(locationId: string) {
    if (this.locationId === locationId) return;
    this.locationId = locationId;
    this.locationTasks = [];

    if (this.isLocationFetched) {
      const cachedTasks = TasksStorage.cachedChildTasks(this.locationId);
      this.locationTasks = cachedTasks;
      return;
    }

    const fetchedTasks = await TasksStorage.fetchChildTasks(this.locationId);
    this.locationTasks = fetchedTasks;
    TasksStorage.expandTask(this.locationId);
  }
}

export const LocationStorage = new LocationStorageClass();
