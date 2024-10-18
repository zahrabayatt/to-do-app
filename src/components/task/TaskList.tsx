import useTasks from "../../hooks/useTasks";
import TaskListItem from "./TaskListItem";

const TaskList = () => {
  const tasks = useTasks();

  return (
    <ul className="scrollbar-light dark:scrollbar-dark my-auto h-[calc(100vh-185px)] w-full flex-grow overflow-y-auto rounded-lg bg-white shadow-sm max-md:h-[calc(100vh-241px)] dark:bg-gray-700">
      {tasks.length === 0 && (
        <p className="w-full pt-20 text-center text-xl max-md:text-lg max-sm:text-base dark:text-white">
          No tasks
        </p>
      )}
      {tasks.map((task) => (
        <TaskListItem key={task.id} task={task} />
      ))}
    </ul>
  );
};

export default TaskList;
