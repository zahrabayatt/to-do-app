import { useState } from "react";
import Task from "../types/Task";
import useTaskStore from "../store/useTaskStore";

interface Props {
  task: Task;
  onRestEdit: () => void;
}

const TaskEditMode = ({ task, onRestEdit }: Props) => {
  const { editTask } = useTaskStore();
  const [newTaskName, setNewTaskName] = useState(task.name);

  const saveEdit = () => {
    editTask(task.id, newTaskName);
    resetEdit();
  };

  const resetEdit = () => {
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
      <button onClick={saveEdit}>Save</button>
      <button onClick={resetEdit}>Cancel</button>
    </>
  );
};

export default TaskEditMode;
