import CategoryForm from "../components/category/CategoryForm";
import CategoryList from "../components/category/CategoryList";

const CategoriesPage = () => {
  return (
    <div className="min-h-screen w-full md:px-5 md:py-4">
      <div className="container mx-auto flex h-full w-full flex-col gap-2 p-4">
        <h1 className="font-900 text-2xl dark:text-white"> All Categories</h1>
        <CategoryList />
      </div>
      <div className="px-4 py-1">
        <CategoryForm />
      </div>
    </div>
  );
};

export default CategoriesPage;
