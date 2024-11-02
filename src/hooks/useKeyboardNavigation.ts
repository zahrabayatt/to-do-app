import { useState } from "react";
import Task from "../types/Task";
import Category from "../types/Category";

const useKeyboardNavigation = (items: Task[] | Category[]) => {
  const [focusedIndex, setFocusedIndex] = useState(0);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLElement>) => {
    if (event.key === "ArrowDown") {
      event.preventDefault();
      setFocusedIndex((prevIndex) =>
        prevIndex === items.length - 1 ? 0 : prevIndex + 1,
      );
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      setFocusedIndex((prevIndex) =>
        prevIndex === 0 ? items.length - 1 : prevIndex - 1,
      );
    }
  };

  return { focusedIndex, handleKeyDown };
};

export default useKeyboardNavigation;
