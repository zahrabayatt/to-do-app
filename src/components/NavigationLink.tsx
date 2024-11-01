import { Link, useLocation } from "@tanstack/react-router";
import { cn } from "../utils";
import * as _ from "lodash";

interface Prop {
  icon?: React.ElementType;
  text: string;
  to: string;
  search?: Record<string, string>;
}

const NavigationMenuItem = ({ icon: Icon, text, to, search }: Prop) => {
  const location = useLocation();
  const pathnameWithoutBase = location.pathname.replace(
    import.meta.env.BASE_URL,
    "/",
  );
  const isSelected =
    pathnameWithoutBase === to && _.isEqual(location.search, search ?? {});

  return (
    <Link
      to={to}
      search={search}
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
