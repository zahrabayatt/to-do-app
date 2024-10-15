import { cn } from "../../utils";
import useTaskQueryStore from "../../store/useTaskQueryStore";
import TaskFilterType from "../../types/TaskFilterType";
import { capitalize } from "../../utils/formatting";

const TaskFilter = () => {
  const setFilter = useTaskQueryStore((s) => s.setFilter);
  const filterBy = useTaskQueryStore((s) => s.taskQuery.filterBy);
  const filters: TaskFilterType[] = ["completed", "important"];

  return (
    <div className="flex space-x-4">
      <button
        key="all"
        className={cn(
          "px-4 py-2 rounded",
          !filterBy ? "bg-blue-500 text-white" : "bg-gray-300 text-black"
        )}
        onClick={() => setFilter(null)}
      >
        All
      </button>
      {filters.map((filter) => (
        <button
          key={filter}
          className={cn(
            "px-4 py-2 rounded",
            filterBy === filter
              ? "bg-blue-500 text-white"
              : "bg-gray-300 text-black"
          )}
          onClick={() => setFilter(filter)}
        >
          {capitalize(filter)}
        </button>
      ))}
    </div>
  );
};

export default TaskFilter;
