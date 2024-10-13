import { useState } from "react";
import { cn } from "../helpers/utils";
import Logo from "./Logo";
import ToggleButton from "./ToggleButton";
import Divider from "./Divider";
import NavigationMenu from "./NavigationMenu";

const Sidebar = () => {
  const [isExtend, setExtend] = useState(true);

  return (
    <aside
      className={cn(
        "bg-dark-purple h-screen p-5 pt-8 absolute duration-300 transition-width sm:relative",
        isExtend ? "w-72" : "w-20"
      )}
    >
      <ToggleButton isToggle={isExtend} setToggle={setExtend} />
      <Logo />
      <NavigationMenu />
      <Divider />
      <p className="text-white">Sidebar</p>
    </aside>
  );
};

export default Sidebar;
