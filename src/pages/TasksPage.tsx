import { useParams } from "react-router-dom";
import Divider from "../components/Divider";
import TaskFilter from "../components/task/TaskFilter";
import TaskForm from "../components/task/TaskForm";
import TaskList from "../components/task/TaskList";
import useSelectCategory from "../hooks/useSelectCategory";

const TasksPage = () => {
  const { categoryId } = useParams<{ categoryId: string | undefined }>();
  useSelectCategory(categoryId ?? null);

  return (
    <>
      <TaskForm />
      <Divider />
      <TaskFilter />
      <Divider />
      <TaskList />
    </>
  );
};

export default TasksPage;
