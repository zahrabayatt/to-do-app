import useCategoryStore from "../../store/useCategoryStore";
import NavigationLink from "../NavigationLink";
import { IoReorderThreeOutline } from "react-icons/io5";

const CategorySelector = () => {
  const categories = useCategoryStore((s) => s.categories);

  return (
    <div className="flex flex-col space-y-2 h-full mb-14 overflow-x-hidden overflow-y-auto scrollbar-light dark:scrollbar-dark scroll-smooth">
      {categories.map((cat) => (
        <NavigationLink
          key={cat.id}
          text={cat.name}
          to={`/${cat.id}`}
          icon={IoReorderThreeOutline}
        />
      ))}
    </div>
  );
};

export default CategorySelector;
