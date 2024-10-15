import { useState } from "react";
import Category from "../../types/Category";
import useCategoryStore from "../../store/useCategoryStore";
import { FaXmark } from "react-icons/fa6";
import { MdDone } from "react-icons/md";

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
    <div className="flex items-center gap-x-2 p-2 bg-gray-200 dark:bg-gray-800 rounded-lg shadow-sm">
      <input
        type="text"
        value={newCategoryName}
        onChange={(e) => setNewCategoryName(e.target.value)}
        autoFocus
        className="w-full bg-transparent dark:text-white text-sm outline-none overflow-scroll"
      />
      <MdDone onClick={handleSaveEdit} className="text-green-500" size={18} />
      <FaXmark onClick={handleResetEdit} className="text-red-500" size={13} />
    </div>
  );
};

export default CategoryEditMode;
