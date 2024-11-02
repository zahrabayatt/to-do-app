import { useState } from "react";
import Task from "../../types/Task";
import useTaskStore from "../../store/useTaskStore";
import { MdDone } from "react-icons/md";
import { FaXmark } from "react-icons/fa6";

interface Props {
  task: Task;
  onRestEdit: () => void;
  isFocused: boolean;
}

const TaskEditMode = ({ task, onRestEdit, isFocused }: Props) => {
  const editTask = useTaskStore((s) => s.editTask);
  const [newTaskName, setNewTaskName] = useState(task.name);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (!isFocused) return;

    if (event.key === "Enter") {
      handleSaveEdit();
    } else if (event.key === "Escape") {
      onRestEdit();
    }
  };

  const handleSaveEdit = () => {
    editTask(task.id, newTaskName);
    onRestEdit();
  };

  return (
    <div
      onKeyDown={handleKeyDown}
      className="flex items-center gap-x-2 rounded-lg bg-gray-200 p-2 shadow-sm dark:bg-gray-800"
    >
      <input
        type="text"
        value={newTaskName}
        onChange={(e) => setNewTaskName(e.target.value)}
        autoFocus
        className="w-full overflow-scroll bg-transparent text-sm outline-none dark:text-white"
      />

      <MdDone onClick={handleSaveEdit} className="text-green-500" size={18} />
      <FaXmark onClick={onRestEdit} className="text-red-500" size={13} />
    </div>
  );
};

export default TaskEditMode;
