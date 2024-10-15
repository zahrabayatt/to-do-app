import { useParams } from "react-router-dom";
import TaskFilter from "../components/task/TaskFilter";
import TaskForm from "../components/task/TaskForm";
import TaskList from "../components/task/TaskList";
import useSelectCategory from "../hooks/useSelectCategory";

const TasksPage = () => {
  const { categoryId } = useParams<{ categoryId: string | undefined }>();
  useSelectCategory(categoryId ?? null);

  return (
    <div className="min-h-screen w-full md:px-5 md:py-4">
      <div className="container mx-auto flex flex-col gap-2 h-full w-full p-4">
        <TaskFilter />
        <TaskList />
      </div>
      <div className="py-1 px-4">
        <TaskForm />
      </div>
    </div>
  );
};

export default TasksPage;
