import useTasks from "../../hooks/useTasks";
import TaskListItem from "./TaskListItem";

const TaskList = () => {
  const tasks = useTasks();

  return (
    <ul className="flex-grow overflow-y-auto h-[calc(100vh-165px)] max-md:h-[calc(100vh-240px)] w-full my-auto bg-white rounded-lg shadow-sm dark:bg-gray-700 scrollbar-light dark:scrollbar-dark">
      {tasks.map((task) => (
        <TaskListItem key={task.id} task={task} />
      ))}
    </ul>
  );
};

export default TaskList;
