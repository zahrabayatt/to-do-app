import useCategoryStore from "../store/useCategoryStore";

const CategoryList = () => {
  const { categories, deleteCategory, editCategory } = useCategoryStore();

  return (
    <ul>
      {categories.map((cat) => (
        <li key={cat.id}>
          <span>{cat.name}</span>
          <button
            onClick={() => {
              const newName = prompt("Edit category name", cat.name);
              if (newName) {
                editCategory(cat.id, newName);
              }
            }}
          >
            Edit
          </button>
          <button onClick={() => deleteCategory(cat.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default CategoryList;
