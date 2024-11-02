import { useRef, useEffect, useState } from "react";
import useTaskStore from "../store/useTaskStore";

const useTaskListItem = (taskId: string, isFocused: boolean) => {
  const [isEditMode, setEditMode] = useState(false);
  const { deleteTask, toggleCompletion } = useTaskStore();
  const taskRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    if (isFocused && taskRef.current) {
      taskRef.current.focus();
    }
  }, [isFocused]);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLElement>) => {
    if (!isFocused || isEditMode) return;

    if (event.ctrlKey && event.key === "e") {
      event.preventDefault();
      setEditMode(true);
    } else if (event.key === "Enter") {
      toggleCompletion(taskId);
    } else if (event.key === "Delete") {
      deleteTask(taskId);
    }
  };

  return { isEditMode, setEditMode, handleKeyDown, taskRef };
};

export default useTaskListItem;
