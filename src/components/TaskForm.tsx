import React, { useState } from "react";
import useTaskStore from "../store/useTaskStore";
import useCategoryStore from "../store/useCategoryStore";

const TaskForm = () => {
  const { addTask } = useTaskStore();
  const { categories } = useCategoryStore();
  const [taskName, setTaskName] = useState("");
  const [categoryId, setCategoryId] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addTask(taskName, categoryId);
    setTaskName("");
    setCategoryId(null);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        placeholder="Task name"
        required
      />
      <select
        onChange={(e) => setCategoryId(e.target.value)}
        value={categoryId || ""}
      >
        <option value="">Select Category</option>
        {categories.map((cat) => (
          <option key={cat.id} value={cat.id}>
            {cat.name}
          </option>
        ))}
      </select>
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;
