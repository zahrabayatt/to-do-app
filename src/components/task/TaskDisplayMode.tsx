import { MdDeleteForever } from "react-icons/md";
import useTaskStore from "../../store/useTaskStore";
import Task from "../../types/Task";
import { cn } from "../../utils";
import { FaRegEdit, FaStar } from "react-icons/fa";

interface Props {
  task: Task;
  onEdit: () => void;
}

const TaskDisplayMode = ({ task, onEdit }: Props) => {
  const { deleteTask, toggleCompletion, toggleImportance } = useTaskStore();

  return (
    <div className="flex items-center justify-between p-2 bg-gray-200 dark:bg-gray-800 rounded-lg shadow-sm hover:bg-gray-300 dark:hover:bg-gray-600 transition">
      <span
        className={cn(
          "text-sm overflow-auto mr-1",
          task.isCompleted
            ? "line-through text-gray-400"
            : "no-underline text-gray-800 dark:text-gray-200"
        )}
      >
        {task.name}
      </span>
      <div className="flex space-x-2">
        <input
          type="checkbox"
          onChange={() => toggleCompletion(task.id)}
          className="text-blue-400"
          checked={task.isCompleted}
        ></input>
        <FaStar
          onClick={() => toggleImportance(task.id)}
          className={cn(
            "text-gray-400",
            task.isImportant && "text-red-300 dark:text-red-300"
          )}
        />
        <FaRegEdit onClick={onEdit} className="dark:text-gray-50" />
        <MdDeleteForever
          onClick={() => deleteTask(task.id)}
          className="text-red-600"
        />
      </div>
    </div>
  );
};

export default TaskDisplayMode;
