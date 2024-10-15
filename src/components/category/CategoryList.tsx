import useCategoryStore from "../../store/useCategoryStore";
import CategoryListItem from "./CategoryListItem";

const CategoryList = () => {
  const categories = useCategoryStore((s) => s.categories);

  return (
    <ul className="flex-grow overflow-y-auto h-[calc(100vh-185px)] max-md:h-[calc(100vh-198px)] w-full my-auto bg-white rounded-lg shadow-sm dark:bg-gray-700 scrollbar-light dark:scrollbar-dark">
      {categories.length === 0 && (
        <p className="w-full text-center pt-20 text-xl max-md:text-lg max-sm:text-base dark:text-white">
          No Categories
        </p>
      )}
      {categories.map((cat) => (
        <CategoryListItem key={cat.id} category={cat} />
      ))}
    </ul>
  );
};

export default CategoryList;
