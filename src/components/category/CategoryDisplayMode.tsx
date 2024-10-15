import useDeleteCategoryWithTasks from "../../hooks/useDeleteCategoryWithTasks";
import Category from "../../types/Category";

interface Props {
  category: Category;
  onEdit: () => void;
}

const CategoryDisplayMode = ({ category, onEdit }: Props) => {
  const deleteCategoryWithTasks = useDeleteCategoryWithTasks();

  return (
    <>
      <span>{category.name}</span>
      <button onClick={onEdit}>Edit</button>
      <button onClick={() => deleteCategoryWithTasks(category.id)}>
        Delete
      </button>
    </>
  );
};

export default CategoryDisplayMode;
