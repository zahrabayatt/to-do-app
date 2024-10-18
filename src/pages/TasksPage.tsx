import { useParams } from "react-router-dom";
import TaskFilter from "../components/task/TaskFilter";
import TaskForm from "../components/task/TaskForm";
import TaskList from "../components/task/TaskList";
import useSelectCategory from "../hooks/useSelectCategory";
import useValidateCategoryId from "../hooks/useValidateCategoryId";

const TasksPage = () => {
  const { categoryId } = useParams<{ categoryId: string | undefined }>();
  useValidateCategoryId(categoryId ?? null);
  useSelectCategory(categoryId ?? null);

  return (
    <div className="w-full md:px-5 md:py-4">
      <div className="container mx-auto flex h-full w-full flex-col gap-2 p-4">
        <TaskFilter />
        <TaskList />
      </div>
      <div className="px-4 py-1">
        <TaskForm />
      </div>
    </div>
  );
};

export default TasksPage;