export const getLocalStorageItem = <T>(key: string): T | null => {
  const storedValue = localStorage.getItem(key);
  return storedValue ? JSON.parse(storedValue) : null;
};

export const setLocalStorageItem = <T>(key: string, value: T): void => {
  localStorage.setItem(key, JSON.stringify(value));
};
