export interface TaskInterface {
  id: string;
  title: string;
  points: number;
  children: boolean;
  childrenFolders: boolean;
  completed: boolean;
  description?: string;
  tags?: string[];
}
