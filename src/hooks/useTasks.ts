import { useMemo } from "react";
import useTaskQueryStore from "../store/useTaskQueryStore";
import useTaskStore from "../store/useTaskStore";
import Task from "../types/Task";

const useTasks = () => {
  const { taskQuery } = useTaskQueryStore();
  const { tasks } = useTaskStore();

  return useMemo(() => {
    if (!taskQuery || (!taskQuery.categoryId && !taskQuery.filterBy)) {
      return tasks;
    }

    const matchesCategory = (task: Task) => {
      return taskQuery.categoryId
        ? task.categoryId === taskQuery.categoryId
        : true;
    };

    const matchesFilter = (task: Task) => {
      switch (taskQuery.filterBy) {
        case "completed":
          return task.isCompleted;
        case "important":
          return task.isImportant;
        default:
          return true;
      }
    };

    return tasks.filter((task) => matchesCategory(task) && matchesFilter(task));
  }, [tasks, taskQuery]);
};

export default useTasks;
