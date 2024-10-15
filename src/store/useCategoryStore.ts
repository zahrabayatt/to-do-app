import Category from "../types/Category";
import { v4 as uuidv4 } from "uuid";
import { create } from "zustand";

interface CategoryStore {
  categories: Category[];
  addCategory: (name: string) => void;
  editCategory: (categoryId: string, newName: string) => void;
  deleteCategory: (categoryId: string) => void;
}

const useCategoryStore = create<CategoryStore>((set) => {
  return {
    categories: [],
    addCategory: (name) =>
      set((state) => ({
        categories: [...state.categories, { id: uuidv4(), name, tasks: [] }],
      })),
    editCategory: (categoryId, newName) =>
      set((state) => ({
        categories: state.categories.map((cat) =>
          cat.id === categoryId ? { ...cat, name: newName } : cat
        ),
      })),
    deleteCategory: (categoryId) => {
      set((state) => ({
        categories: state.categories.filter((cat) => cat.id !== categoryId),
      }));
    },
  };
});

export default useCategoryStore;
