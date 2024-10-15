import { useState } from "react";
import Task from "../../types/Task";
import useTaskStore from "../../store/useTaskStore";
import { MdDone } from "react-icons/md";
import { FaXmark } from "react-icons/fa6";

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
    <div className="flex items-center gap-x-2 p-2 bg-gray-200 dark:bg-gray-800 rounded-lg shadow-sm">
      <input
        type="text"
        value={newTaskName}
        onChange={(e) => setNewTaskName(e.target.value)}
        autoFocus
        className="w-full bg-transparent dark:text-white text-sm outline-none overflow-scroll"
      />

      <MdDone onClick={handleSaveEdit} className="text-green-500" size={18} />
      <FaXmark onClick={handleResetEdit} className="text-red-500" size={13} />
    </div>
  );
};

export default TaskEditMode;
