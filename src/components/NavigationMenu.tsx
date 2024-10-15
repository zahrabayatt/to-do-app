import { FaTasks } from "react-icons/fa";
import { AiOutlineDashboard } from "react-icons/ai";
import { BiCategoryAlt } from "react-icons/bi";
import NavigationLink from "./NavigationLink";

const NavigationMenu = () => {
  const menuItems = [
    { text: "All Tasks", to: "/", icon: FaTasks },
    { text: "Categories", to: "/categories", icon: BiCategoryAlt },
    { text: "Dashboard", to: "/dashboard", icon: AiOutlineDashboard },
  ];

  return (
    <nav className="flex flex-col gap-y-2 my-8">
      {menuItems.map((item) => (
        <NavigationLink
          key={item.to}
          icon={item.icon}
          text={item.text}
          to={item.to}
        />
      ))}
    </nav>
  );
};

export default NavigationMenu;
