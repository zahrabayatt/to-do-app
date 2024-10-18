import { useCallback } from "react";
import useCategoryStore from "../store/useCategoryStore";
import useTaskQueryStore from "../store/useTaskQueryStore";
import useTaskStore from "../store/useTaskStore";

const useDeleteCategoryWithTasks = () => {
  const deleteCategory = useCategoryStore((s) => s.deleteCategory);
  const clearTasksInCategory = useTaskStore((s) => s.clearTasksInCategory);
  const { taskQuery, setCategoryId } = useTaskQueryStore();

  const deleteCategoryWithTasks = useCallback(
    (categoryId: string) => {
      clearTasksInCategory(categoryId);

      if (taskQuery.categoryId === categoryId) {
        setCategoryId(null);
      }

      deleteCategory(categoryId);
    },
    [clearTasksInCategory, deleteCategory, taskQuery, setCategoryId],
  );

  return deleteCategoryWithTasks;
};

export default useDeleteCategoryWithTasks;
