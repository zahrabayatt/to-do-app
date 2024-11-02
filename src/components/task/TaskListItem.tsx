import Task from "../../types/Task";
import TaskDisplayMode from "./TaskDisplayMode";
import TaskEditMode from "./TaskEditMode";
import useTaskListItem from "../../hooks/useTaskListItem";

interface TaskListItemProps {
  task: Task;
  isFocused: boolean;
}

const TaskListItem = ({ task, isFocused }: TaskListItemProps) => {
  const { isEditMode, setEditMode, handleKeyDown, taskRef } = useTaskListItem(
    task.id,
    isFocused,
  );

  return (
    <li
      ref={taskRef}
      tabIndex={0}
      onKeyDown={handleKeyDown}
      className="m-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
    >
      {isEditMode ? (
        <TaskEditMode
          task={task}
          onRestEdit={() => setEditMode(false)}
          isFocused={isFocused}
        />
      ) : (
        <TaskDisplayMode task={task} onEdit={() => setEditMode(true)} />
      )}
    </li>
  );
};

export default TaskListItem;
