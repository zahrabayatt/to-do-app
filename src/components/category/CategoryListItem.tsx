import Category from "../../types/Category";
import CategoryDisplayMode from "./CategoryDisplayMode";
import CategoryEditMode from "./CategoryEditMode";
import useCategoryListItem from "../../hooks/useCategoryListItem";

interface Props {
  category: Category;
  isFocused: boolean;
}

const CategoryListItem = ({ category, isFocused }: Props) => {
  const { isEditMode, setEditMode, handleKeyDown, categoryRef } =
    useCategoryListItem(category.id, isFocused);

  return (
    <li
      ref={categoryRef}
      tabIndex={0}
      onKeyDown={handleKeyDown}
      className="m-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
    >
      {isEditMode ? (
        <CategoryEditMode
          category={category}
          onRestEdit={() => setEditMode(false)}
          isFocused={isFocused}
        />
      ) : (
        <CategoryDisplayMode
          category={category}
          onEdit={() => setEditMode(true)}
        />
      )}
    </li>
  );
};

export default CategoryListItem;
