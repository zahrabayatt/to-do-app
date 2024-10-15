import { useState } from "react";
import { cn } from "../helpers/utils";
import Logo from "./Logo";
import ToggleButton from "./ToggleButton";
import Divider from "./Divider";
import NavigationMenu from "./NavigationMenu";
import ColorModeSwitch from "./ColorModeSwitch";
import CategorySelector from "./category/CategorySelector";

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
      <CategorySelector />
      <div className="absolute -bottom-0 left-0 w-full scale-[0.8]">
        <ColorModeSwitch isExtend={isExtend} />
      </div>
    </aside>
  );
};

export default Sidebar;
