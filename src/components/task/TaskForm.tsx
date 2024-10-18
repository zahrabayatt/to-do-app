import React, { useState } from "react";
import useTaskStore from "../../store/useTaskStore";
import useCategoryStore from "../../store/useCategoryStore";
import useTaskQueryStore from "../../store/useTaskQueryStore";

const TaskForm = () => {
  const addTask = useTaskStore((s) => s.addTask);
  const categoryId = useTaskQueryStore((s) => s.taskQuery.categoryId);
  const categories = useCategoryStore((s) => s.categories);
  const [taskName, setTaskName] = useState("");
  const [newCategoryId, setNewCategoryId] = useState<string | null>(
    categoryId ?? null,
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addTask(taskName, newCategoryId);
    setTaskName("");
    setNewCategoryId(null);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto flex w-4/5 gap-x-2 rounded-lg bg-white p-4 shadow-md max-md:w-full max-md:flex-col max-md:gap-y-2 dark:bg-gray-700"
    >
      <input
        type="text"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        placeholder="Task name"
        required
        className="w-full rounded border border-gray-300 p-2 text-sm outline-gray-400 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:outline-gray-500"
      />
      {!categoryId && (
        <select
          onChange={(e) => setNewCategoryId(e.target.value)}
          value={newCategoryId || ""}
          className="rounded border border-gray-300 p-2 text-sm dark:border-gray-600 dark:bg-gray-700 dark:text-white"
        >
          <option value="">Select Category</option>
          {categories.map((cat) => (
            <option key={cat.id} value={cat.id}>
              {cat.name}
            </option>
          ))}
        </select>
      )}
      <button
        type="submit"
        className="text-nowrap rounded bg-blue-500 px-4 py-2 text-sm text-white transition hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700"
      >
        Add Task
      </button>
    </form>
  );
};

export default TaskForm;
