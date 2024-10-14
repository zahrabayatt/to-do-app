import { create } from "zustand";
import Task from "../types/Task";
import { v4 as uuidv4 } from "uuid";

interface TaskStore {
  tasks: Task[];
  addTask: (name: string, categoryId: string | null) => void;
  editTask: (taskId: string, newName: string) => void;
  deleteTask: (taskId: string) => void;
  toggleCompletion: (taskId: string) => void;
  toggleImportance: (taskId: string) => void;
  clearTasksInCategory: (categoryId: string) => void;
}

const useTaskStore = create<TaskStore>((set) => ({
  tasks: [],
  addTask: (name, categoryId) =>
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
    })),
  editTask: (taskId, newName) =>
    set((state) => ({
      tasks: state.tasks.map((task) =>
        task.id === taskId ? { ...task, name: newName } : task
      ),
    })),
  deleteTask: (taskId) =>
    set((state) => ({
      tasks: state.tasks.filter((task) => task.id !== taskId),
    })),
  toggleCompletion: (taskId) =>
    set((state) => ({
      tasks: state.tasks.map((task) =>
        task.id === taskId ? { ...task, isCompleted: !task.isCompleted } : task
      ),
    })),
  toggleImportance: (taskId) =>
    set((state) => ({
      tasks: state.tasks.map((task) =>
        task.id === taskId ? { ...task, isImportant: !task.isImportant } : task
      ),
    })),
  clearTasksInCategory: (categoryId) =>
    set((state) => ({
      tasks: state.tasks.filter((task) => task.categoryId !== categoryId),
    })),
}));

export default useTaskStore;
