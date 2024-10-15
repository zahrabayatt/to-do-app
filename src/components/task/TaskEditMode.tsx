import { useState } from "react";
import Task from "../../types/Task";
import useTaskStore from "../../store/useTaskStore";

interface Props {
  task: Task;
  onRestEdit: () => void;
}

const TaskEditMode = ({ task, onRestEdit }: Props) => {
  const editTask = useTaskStore((s) => s.editTask);
  const [newTaskName, setNewTaskName] = useState(task.name);

  const handleSaveEdit = () => {
    editTask(task.id, newTaskName);
    handleResetEdit();
  };

  const handleResetEdit = () => {
    onRestEdit();
    setNewTaskName("");
  };

  return (
    <div className="flex items-center space-x-2 p-2 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-sm">
      <input
        type="text"
        value={newTaskName}
        onChange={(e) => setNewTaskName(e.target.value)}
        className="border border-gray-300 rounded p-2 flex-grow dark:border-gray-600 dark:bg-gray-700 dark:text-white"
      />
      <button
        onClick={handleSaveEdit}
        className="bg-blue-500 text-white rounded px-4 py-2 hover:bg-blue-600 transition dark:bg-blue-600 dark:hover:bg-blue-700"
      >
        Save
      </button>
      <button
        onClick={handleResetEdit}
        className="bg-red-500 text-white rounded px-4 py-2 hover:bg-red-600 transition dark:bg-red-600 dark:hover:bg-red-700"
      >
        Cancel
      </button>
    </div>
  );
};

export default TaskEditMode;
