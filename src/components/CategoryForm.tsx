import React, { useState } from "react";
import useCategoryStore from "../store/useCategoryStore";

const CategoryForm: React.FC = () => {
  const { addCategory } = useCategoryStore();
  const [categoryName, setCategoryName] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addCategory(categoryName);
    setCategoryName("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={categoryName}
        onChange={(e) => setCategoryName(e.target.value)}
        placeholder="Category name"
        required
      />
      <button type="submit">Add Category</button>
    </form>
  );
};

export default CategoryForm;
