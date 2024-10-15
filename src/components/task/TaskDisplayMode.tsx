import useTaskStore from "../../store/useTaskStore";
import Task from "../../types/Task";
import { cn } from "../../utils";

interface Props {
  task: Task;
  onEdit: () => void;
}

const TaskDisplayMode = ({ task, onEdit }: Props) => {
  const { deleteTask, toggleCompletion, toggleImportance } = useTaskStore();

  return (
    <div className="flex items-center justify-between p-2 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-sm hover:bg-gray-200 dark:hover:bg-gray-600 transition">
      <span
        className={cn(
          "flex-grow",
          task.isCompleted
            ? "line-through text-gray-400"
            : "no-underline text-gray-800 dark:text-gray-200"
        )}
      >
        {task.name}
      </span>
      <div className="flex space-x-2">
        <button
          onClick={() => toggleCompletion(task.id)}
          className="text-sm text-blue-500 hover:underline dark:text-blue-400"
        >
          {task.isCompleted ? "Undo" : "Complete"}
        </button>
        <button
          onClick={() => toggleImportance(task.id)}
          className="text-sm text-blue-500 hover:underline dark:text-blue-400"
        >
          {task.isImportant ? "Unmark" : "Mark Important"}
        </button>
        <button
          onClick={() => onEdit()}
          className="text-sm text-blue-500 hover:underline dark:text-blue-400"
        >
          Edit
        </button>
        <button
          onClick={() => deleteTask(task.id)}
          className="text-sm text-red-500 hover:underline dark:text-red-400"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TaskDisplayMode;
