import { Link, useLocation } from "react-router-dom";
import { cn } from "../utils";

interface Prop {
  icon?: React.ElementType;
  text: string;
  to: string;
}

const NavigationMenuItem = ({ icon: Icon, text, to }: Prop) => {
  const location = useLocation();
  const isSelected = location.pathname === to;

  return (
    <Link
      to={to}
      className={cn(
        "flex cursor-pointer items-center gap-x-4 rounded-md p-2 text-base text-gray-300 hover:bg-light-white",
        isSelected && "bg-light-white",
      )}
    >
      {Icon && <Icon size={20} className="shrink-0" />}
      <span className="origin-left overflow-hidden whitespace-nowrap duration-200">
        {text}
      </span>
    </Link>
  );
};

export default NavigationMenuItem;
