export function getLocalStorageItem<DataType>(key: string) {
  const value = localStorage.getItem(key);
  if (value === null) return null;

  try {
    return JSON.parse(value) as DataType;
  } catch (error) {
    return null;
  }
}

export function setLocalStorageItem(key: string, value: any) {
  if (!value) {
    localStorage.removeItem(key);
    return;
  }

  if (typeof value === "object" && value !== null && Object.keys(value).length === 0) {
    localStorage.removeItem(key);
    return;
  }

  if (Array.isArray(value) && value.length === 0) {
    localStorage.removeItem(key);
    return;
  }

  localStorage.setItem(key, JSON.stringify(value));
}

export function tasksStorageKey(taskId: string) {
  return `tasks:${taskId}`;
}
