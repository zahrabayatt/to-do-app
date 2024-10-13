import { useState } from "react";
import { FaHome, FaTasks, FaUser } from "react-icons/fa";
import NavigationLink from "./NavigationLink";

const NavigationMenu = () => {
  const [selectedItem, setSelectedItem] = useState<string>("Home");

  const menuItems = [
    { text: "Home", to: "/", icon: FaHome },
    { text: "Tasks", to: "/tasks", icon: FaTasks },
    { text: "Profile", to: "/profile", icon: FaUser },
  ];

  const handleMenuItemClick = (to: string) => {
    setSelectedItem(to);
  };
  return (
    <nav className="flex flex-col gap-y-2 pt-2">
      {menuItems.map((item) => (
        <NavigationLink
          key={item.to}
          icon={item.icon}
          text={item.text}
          to={item.to}
          isSelected={item.to === selectedItem}
          onClick={() => handleMenuItemClick(item.to)}
        />
      ))}
    </nav>
  );
};

export default NavigationMenu;
