import { useState } from "react";
import Task from "../../types/Task";
import TaskDisplayMode from "./TaskDisplayMode";
import TaskEditMode from "./TaskEditMode";

interface TaskListItemProps {
  task: Task;
}

const TaskListItem = ({ task }: TaskListItemProps) => {
  const [isEditMode, setEditMode] = useState(false);

  return (
    <li>
      {isEditMode ? (
        <TaskEditMode task={task} onRestEdit={() => setEditMode(false)} />
      ) : (
        <TaskDisplayMode task={task} onEdit={() => setEditMode(true)} />
      )}
    </li>
  );
};

export default TaskListItem;
