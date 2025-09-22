import { ConfigInterface } from "interfaces/config";

export const config: ConfigInterface = {
  root: [
    {
      id: "1",
      title: "Backend",
      points: 10,
      completed: false,
      children: true,
      childrenFolders: true,
      description: "Учить трудно, но придется...",
    },
    {
      id: "2",
      title: "Frontend",
      points: 4,
      completed: false,
      children: false,
      childrenFolders: false,
    },
  ],
  1: [
    {
      id: "3",
      title: "Node.js",
      points: 4,
      completed: false,
      children: true,
      childrenFolders: false,
    },
  ],
  3: [
    {
      id: "4",
      title: "Express.js",
      points: 2,
      completed: false,
      children: false,
      childrenFolders: false,
    },
  ],
};
