import Category from "../types/Category";
import { v4 as uuidv4 } from "uuid";
import { create } from "zustand";
import {
  getLocalStorageItem,
  setLocalStorageItem,
} from "../utils/localStorage";
import { CATEGORIES_STORAGE_KEY } from "../constants/keys";

interface CategoryStore {
  categories: Category[];
  addCategory: (name: string) => void;
  editCategory: (categoryId: string, newName: string) => void;
  deleteCategory: (categoryId: string) => void;
}

const useCategoryStore = create<CategoryStore>((set, get) => {
  return {
    categories: getLocalStorageItem<Category[]>(CATEGORIES_STORAGE_KEY) || [],
    addCategory: (name) => {
      set((state) => ({
        categories: [...state.categories, { id: uuidv4(), name, tasks: [] }],
      }));

      setLocalStorageItem(CATEGORIES_STORAGE_KEY, get().categories);
    },
    editCategory: (categoryId, newName) => {
      set((state) => ({
        categories: state.categories.map((cat) =>
          cat.id === categoryId ? { ...cat, name: newName } : cat
        ),
      }));

      setLocalStorageItem(CATEGORIES_STORAGE_KEY, get().categories);
    },
    deleteCategory: (categoryId) => {
      set((state) => ({
        categories: state.categories.filter((cat) => cat.id !== categoryId),
      }));

      setLocalStorageItem(CATEGORIES_STORAGE_KEY, get().categories);
    },
  };
});

export default useCategoryStore;
