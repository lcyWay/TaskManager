import { TaskInterface } from "./task";

export type ConfigInterface = {
  root: TaskInterface[];
} & Record<string, TaskInterface[]>;
