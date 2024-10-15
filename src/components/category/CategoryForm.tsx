import React, { useState } from "react";
import useCategoryStore from "../../store/useCategoryStore";

const CategoryForm: React.FC = () => {
  const addCategory = useCategoryStore((s) => s.addCategory);
  const [categoryName, setCategoryName] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addCategory(categoryName);
    setCategoryName("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-4/5 max-md:w-full p-4 max-md:flex-col mx-auto gap-x-2 max-md:gap-y-2  bg-white rounded-lg shadow-md dark:bg-gray-700"
    >
      <input
        type="text"
        value={categoryName}
        onChange={(e) => setCategoryName(e.target.value)}
        placeholder="Category name"
        required
        className="text-sm w-full border border-gray-300 rounded p-2 outline-gray-400 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:outline-gray-500"
      />
      <button
        type="submit"
        className="bg-blue-500 text-sm text-white text-nowrap rounded px-4 py-2 hover:bg-blue-600 transition dark:bg-blue-600 dark:hover:bg-blue-700"
      >
        Add Category
      </button>
    </form>
  );
};

export default CategoryForm;
