import { useState } from "react";
import Category from "../../types/Category";
import useCategoryStore from "../../store/useCategoryStore";

interface Props {
  category: Category;
  onRestEdit: () => void;
}

const CategoryEditMode = ({ category, onRestEdit }: Props) => {
  const editCategory = useCategoryStore((s) => s.editCategory);
  const [newCategoryName, setNewCategoryName] = useState(category.name);

  const handleSaveEdit = () => {
    editCategory(category.id, newCategoryName);
    handleResetEdit();
  };

  const handleResetEdit = () => {
    onRestEdit();
    setNewCategoryName("");
  };

  return (
    <>
      <input
        type="text"
        value={newCategoryName}
        onChange={(e) => setNewCategoryName(e.target.value)}
      />
      <button onClick={handleSaveEdit}>Save</button>
      <button onClick={handleResetEdit}>Cancel</button>
    </>
  );
};

export default CategoryEditMode;
