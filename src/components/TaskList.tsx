import useTaskStore from "../store/useTaskStore";
import TaskListItem from "./TaskListItem";

const TaskList = () => {
  const { tasks } = useTaskStore();

  return (
    <ul>
      {tasks.map((task) => (
        <TaskListItem key={task.id} task={task} />
      ))}
    </ul>
  );
};

export default TaskList;
