import { useState } from "react";
import Category from "../../types/Category";
import CategoryDisplayMode from "./CategoryDisplayMode";
import CategoryEditMode from "./CategoryEditMode";

interface Props {
  category: Category;
}

const CategoryListItem = ({ category }: Props) => {
  const [isEditMode, setEditMode] = useState(false);

  return (
    <li className="m-3">
      {isEditMode ? (
        <CategoryEditMode
          category={category}
          onRestEdit={() => setEditMode(false)}
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
