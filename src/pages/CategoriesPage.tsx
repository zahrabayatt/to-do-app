import CategoryForm from "../components/category/CategoryForm";
import CategoryList from "../components/category/CategoryList";

const CategoriesPage = () => {
  return (
    <div className="min-h-screen w-full md:px-5 md:py-4">
      <div className="container mx-auto flex flex-col gap-2 h-full w-full p-4">
        <h1 className="text-2xl font-900 dark:text-white"> All Categories</h1>
        <CategoryList />
      </div>
      <div className="py-1 px-4">
        <CategoryForm />
      </div>
    </div>
  );
};

export default CategoriesPage;
