import { action, makeObservable, observable } from "mobx";

import { UserStorage } from "storages/UserStorage";

import { getLocalStorageItem, tasksStorageKey } from "utils/localStorage";

import { TaskInterface } from "interfaces/task";

class TasksStorageClass {
  constructor() {
    makeObservable(this);
  }

  @observable.shallow cache: Record<string, TaskInterface[]> = {};
  @observable.shallow fetchingTasks: string[] = [];
  @observable.shallow expandedTasks: string[] = [];

  @action.bound isTaskFetched(id: string) {
    return Array.isArray(this.cache[id]);
  }

  @action.bound isTaskFetching(id: string) {
    return this.fetchingTasks.includes(id);
  }

  @action.bound expandTask(id: string) {
    const isExpanded = this.expandedTasks.includes(id);
    if (isExpanded) return;
    this.onTaskExpandToggle(id);
  }

  @action.bound onTaskExpandToggle(id: string) {
    const initialLength = this.expandedTasks.length;
    this.expandedTasks = this.expandedTasks.filter((taskId) => taskId !== id);

    if (initialLength !== this.expandedTasks.length) return;
    this.expandedTasks = [...this.expandedTasks, id];
  }

  @action.bound cachedChildTasks(id: string) {
    if (!this.isTaskFetched(id)) return [];
    return this.cache[id];
  }

  @action.bound async fetchChildTasks(id: string) {
    if (this.isTaskFetching(id)) return [];
    if (this.isTaskFetched(id)) return this.cache[id];

    this.fetchingTasks.push(id);
    await new Promise((resolve) => setTimeout(resolve, 500));
    this.fetchingTasks = this.fetchingTasks.filter((taskId) => taskId !== id);

    if (UserStorage.isGuestUser) {
      const storageTasks = getLocalStorageItem<TaskInterface[]>(tasksStorageKey(id));
      const tasks = Array.isArray(storageTasks) ? storageTasks : [];

      const newCache = { ...this.cache, [id]: tasks };
      this.cache = newCache;

      return tasks;
    }

    // TODO: request logic

    const newCache = { ...this.cache, [id]: [] };
    this.cache = newCache;

    return [];
  }
}

export const TasksStorage = new TasksStorageClass();
