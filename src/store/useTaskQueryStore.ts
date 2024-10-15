import { create } from "zustand";
import TaskFilterType from "../types/TaskFilterType";

interface TaskQuery {
  filterBy?: TaskFilterType | null;
  categoryId?: string | null;
}

interface TaskQueryStore {
  taskQuery: TaskQuery;

  setFilter: (filter: TaskFilterType | null) => void;
  setCategoryId: (categoryId: string | null) => void;
}

const useTaskQueryStore = create<TaskQueryStore>((set) => ({
  taskQuery: {},

  setFilter: (filter) =>
    set((store) => ({ taskQuery: { ...store.taskQuery, filterBy: filter } })),

  setCategoryId: (categoryId) =>
    set((store) => ({ taskQuery: { ...store.taskQuery, categoryId } })),
}));

export default useTaskQueryStore;
