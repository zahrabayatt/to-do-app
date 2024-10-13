import { Link } from "react-router-dom";
import { cn } from "../helpers/utils";

interface Prop {
  icon?: React.ElementType;
  text: string;
  to: string;
  isSelected: boolean;
  onClick: () => void;
}

const NavigationMenuItem = ({
  icon: Icon,
  text,
  to,
  isSelected,
  onClick,
}: Prop) => {
  return (
    <Link
      to={to}
      className={cn(
        "flex rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 mt-2",
        isSelected && "bg-light-white"
      )}
      onClick={onClick}
    >
      {Icon && <Icon size={20} className="shrink-0" />}
      <span className="origin-left duration-200 whitespace-nowrap overflow-hidden">
        {text}
      </span>
    </Link>
  );
};

export default NavigationMenuItem;
