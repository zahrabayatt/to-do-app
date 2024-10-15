import useCategoryStore from "../../store/useCategoryStore";
import CategoryListItem from "./CategoryListItem";

const CategoryList = () => {
  const categories = useCategoryStore((s) => s.categories);

  return (
    <ul>
      {categories.map((cat) => (
        <CategoryListItem key={cat.id} category={cat} />
      ))}
    </ul>
  );
};

export default CategoryList;
