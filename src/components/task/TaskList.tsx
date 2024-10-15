import useTasks from "../../hooks/useTasks";
import TaskListItem from "./TaskListItem";

const TaskList = () => {
  const tasks = useTasks();

  return (
    <>
      <ul>
        {tasks.map((task) => (
          <TaskListItem key={task.id} task={task} />
        ))}
      </ul>
    </>
  );
};

export default TaskList;
