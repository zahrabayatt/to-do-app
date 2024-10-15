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
    <>
      <input
        type="text"
        value={newTaskName}
        onChange={(e) => setNewTaskName(e.target.value)}
      />
      <button onClick={handleSaveEdit}>Save</button>
      <button onClick={handleResetEdit}>Cancel</button>
    </>
  );
};

export default TaskEditMode;
