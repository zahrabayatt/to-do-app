import { create } from "zustand";
import Task from "../types/Task";
import { v4 as uuidv4 } from "uuid";
import {
  getLocalStorageItem,
  setLocalStorageItem,
} from "../utils/localStorage";
import { TASKS_STORAGE_KEY } from "../constants/keys";

interface TaskStore {
  tasks: Task[];
  addTask: (name: string, categoryId: string | null) => void;
  editTask: (taskId: string, newName: string) => void;
  deleteTask: (taskId: string) => void;
  toggleCompletion: (taskId: string) => void;
  toggleImportance: (taskId: string) => void;
  clearTasksInCategory: (categoryId: string) => void;
}

const useTaskStore = create<TaskStore>((set, get) => ({
  tasks: getLocalStorageItem<Task[]>(TASKS_STORAGE_KEY) || [],
  addTask: (name, categoryId) => {
    set((state) => ({
      tasks: [
        ...state.tasks,
        {
          id: uuidv4(),
          name,
          createdOn: new Date().toISOString(),
          isCompleted: false,
          isImportant: false,
          categoryId,
        },
      ],
    }));

    setLocalStorageItem(TASKS_STORAGE_KEY, get().tasks);
  },
  editTask: (taskId, newName) => {
    set((state) => ({
      tasks: state.tasks.map((task) =>
        task.id === taskId ? { ...task, name: newName } : task
      ),
    }));

    setLocalStorageItem(TASKS_STORAGE_KEY, get().tasks);
  },
  deleteTask: (taskId) => {
    set((state) => ({
      tasks: state.tasks.filter((task) => task.id !== taskId),
    }));

    setLocalStorageItem(TASKS_STORAGE_KEY, get().tasks);
  },
  toggleCompletion: (taskId) => {
    set((state) => ({
      tasks: state.tasks.map((task) =>
        task.id === taskId ? { ...task, isCompleted: !task.isCompleted } : task
      ),
    }));

    setLocalStorageItem(TASKS_STORAGE_KEY, get().tasks);
  },
  toggleImportance: (taskId) => {
    set((state) => ({
      tasks: state.tasks.map((task) =>
        task.id === taskId ? { ...task, isImportant: !task.isImportant } : task
      ),
    }));

    setLocalStorageItem(TASKS_STORAGE_KEY, get().tasks);
  },
  clearTasksInCategory: (categoryId) => {
    set((state) => ({
      tasks: state.tasks.filter((task) => task.categoryId !== categoryId),
    }));

    setLocalStorageItem(TASKS_STORAGE_KEY, get().tasks);
  },
}));

export default useTaskStore;
