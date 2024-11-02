import useKeyboardNavigation from "../../hooks/useKeyboardNavigation";
import useCategoryStore from "../../store/useCategoryStore";
import CategoryListItem from "./CategoryListItem";

const CategoryList = () => {
  const categories = useCategoryStore((s) => s.categories);
  const { focusedIndex, handleKeyDown } = useKeyboardNavigation(categories);

  return (
    <ul
      onKeyDown={handleKeyDown}
      tabIndex={0}
      className="scrollbar-light dark:scrollbar-dark my-auto h-[calc(100vh-185px)] w-full flex-grow overflow-y-auto rounded-lg bg-white shadow-sm max-md:h-[calc(100vh-198px)] dark:bg-gray-700"
    >
      {categories.length === 0 && (
        <p className="w-full pt-20 text-center text-xl max-md:text-lg max-sm:text-base dark:text-white">
          No Categories
        </p>
      )}
      {categories.map((cat, index) => (
        <CategoryListItem
          key={cat.id}
          category={cat}
          isFocused={index === focusedIndex}
        />
      ))}
    </ul>
  );
};

export default CategoryList;
