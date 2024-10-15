import { useCallback, useEffect } from "react";
import useTaskQueryStore from "../store/useTaskQueryStore";

const useSelectCategory = (categoryId: string | null) => {
  const {
    taskQuery: { categoryId: currentCategoryId },
    setCategoryId,
  } = useTaskQueryStore();

  const selectCategory = useCallback(() => {
    if (categoryId !== currentCategoryId) {
      setCategoryId(categoryId);
    }
  }, [categoryId, currentCategoryId, setCategoryId]);

  useEffect(() => {
    selectCategory();
  }, [selectCategory]);
};

export default useSelectCategory;
