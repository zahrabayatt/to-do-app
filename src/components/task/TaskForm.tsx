import React, { useState } from "react";
import useTaskStore from "../../store/useTaskStore";
import useCategoryStore from "../../store/useCategoryStore";

const TaskForm = () => {
  const addTask = useTaskStore((s) => s.addTask);
  const categories = useCategoryStore((s) => s.categories);
  const [taskName, setTaskName] = useState("");
  const [categoryId, setCategoryId] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addTask(taskName, categoryId);
    setTaskName("");
    setCategoryId(null);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-4/5 max-md:w-full p-4 max-md:flex-col mx-auto gap-x-2 max-md:gap-y-2  bg-white rounded-lg shadow-md dark:bg-gray-700"
    >
      <input
        type="text"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        placeholder="Task name"
        required
        className="text-sm w-full border border-gray-300 rounded p-2 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
      />
      <select
        onChange={(e) => setCategoryId(e.target.value)}
        value={categoryId || ""}
        className="border border-gray-300 text-sm rounded p-2 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
      >
        <option value="">Select Category</option>
        {categories.map((cat) => (
          <option key={cat.id} value={cat.id}>
            {cat.name}
          </option>
        ))}
      </select>
      <button
        type="submit"
        className="bg-blue-500 text-sm text-white text-nowrap rounded px-4 py-2 hover:bg-blue-600 transition dark:bg-blue-600 dark:hover:bg-blue-700"
      >
        Add Task
      </button>
    </form>
  );
};

export default TaskForm;
