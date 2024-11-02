import { useState, useRef, useEffect } from "react";
import useDeleteCategoryWithTasks from "./useDeleteCategoryWithTasks";

const useCategoryListItem = (categoryId: string, isFocused: boolean) => {
  const [isEditMode, setEditMode] = useState(false);
  const deleteCategoryWithTasks = useDeleteCategoryWithTasks();
  const categoryRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    if (isFocused && categoryRef.current) {
      categoryRef.current.focus();
    }
  }, [isFocused]);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLLIElement>) => {
    if (!isFocused || isEditMode) return;

    if (event.ctrlKey && event.key === "e") {
      event.preventDefault();
      setEditMode(true);
    } else if (event.key === "Delete") {
      deleteCategoryWithTasks(categoryId);
    }
  };

  return { isEditMode, setEditMode, handleKeyDown, categoryRef };
};

export default useCategoryListItem;
