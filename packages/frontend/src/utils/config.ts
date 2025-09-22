import { ROOT_LOCATION } from "storages/LocationStorage";

import { TaskInterface } from "interfaces/task";
import { ConfigInterface } from "interfaces/config";

import { tasksStorageKey } from "./localStorage";

function saveTasks(tasks: TaskInterface[], config: ConfigInterface) {
  tasks.forEach((task) => {
    const children = config[task.id];
    if (!Array.isArray(children)) return;
    localStorage.setItem(tasksStorageKey(task.id), JSON.stringify(children));
    saveTasks(children, config);
  });
}

export function parseConfig(config: ConfigInterface) {
  localStorage.clear();

  const tasks = config.root;
  localStorage.setItem(tasksStorageKey(ROOT_LOCATION), JSON.stringify(tasks));

  saveTasks(tasks, config);
}
