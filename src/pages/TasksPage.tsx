import { useParams } from "react-router-dom";
import TaskFilter from "../components/task/TaskFilter";
import TaskForm from "../components/task/TaskForm";
import TaskList from "../components/task/TaskList";
import useSelectCategory from "../hooks/useSelectCategory";

const TasksPage = () => {
  const { categoryId } = useParams<{ categoryId: string | undefined }>();
  useSelectCategory(categoryId ?? null);

  return (
    <div className="min-h-screen flex flex-col px-5 py-4 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto flex-grow h-full">
        <TaskFilter />
        <TaskList />
      </div>
      <TaskForm />
    </div>
  );
};

export default TasksPage;
