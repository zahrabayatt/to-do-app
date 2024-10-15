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
        "flex rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-base items-center gap-x-4",
        isSelected && "bg-light-white"
      )}
    >
      {Icon && <Icon size={20} className="shrink-0" />}
      <span className="origin-left duration-200 whitespace-nowrap overflow-hidden">
        {text}
      </span>
    </Link>
  );
};

export default NavigationMenuItem;
