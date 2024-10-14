import useTaskStore from "../store/useTaskStore";
import Task from "../types/Task";

interface Props {
  task: Task;
  OnEdit: (id: string) => void;
}

const TaskDisplayMode = ({ task, OnEdit }: Props) => {
  const { deleteTask, toggleCompletion, toggleImportance } = useTaskStore();

  return (
    <>
      <span
        style={{ textDecoration: task.isCompleted ? "line-through" : "none" }}
      >
        {task.name}
      </span>
      <button onClick={() => toggleCompletion(task.id)}>
        {task.isCompleted ? "Undo" : "Complete"}
      </button>
      <button onClick={() => toggleImportance(task.id)}>
        {task.isImportant ? "Unmark" : "Mark Important"}
      </button>
      <button onClick={() => OnEdit(task.id)}>Edit</button>
      <button onClick={() => deleteTask(task.id)}>Delete</button>
    </>
  );
};

export default TaskDisplayMode;
