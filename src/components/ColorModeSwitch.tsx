import { FaSun, FaMoon } from "react-icons/fa";
import { cn } from "../utils";
import useTheme from "../hooks/useTheme";

interface Props {
  isExtend?: boolean;
}

const ColorModeSwitch = ({ isExtend = true }: Props) => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <div className="mx-auto flex w-full max-w-md items-center justify-center p-4">
      <div
        className={cn(
          "relative flex h-12 cursor-pointer items-center rounded-full transition-all duration-300 ease-in-out",
          isDarkMode ? "bg-gray-700" : "bg-slate-50",
          isExtend ? "w-full" : "w-20",
        )}
        onClick={toggleTheme}
      >
        <ToggleIcons isDarkMode={isDarkMode} isExtend={isExtend} />
        {isExtend && <ToggleIndicator isDarkMode={isDarkMode} />}
      </div>
    </div>
  );
};

const ToggleIcons = ({
  isDarkMode,
  isExtend,
}: {
  isDarkMode: boolean;
  isExtend: boolean;
}) => (
  <div className="flex w-full items-center justify-between">
    <div
      className={cn(
        "flex items-center justify-center transition-all duration-300 ease-in-out",
        isDarkMode && !isExtend ? "hidden" : "w-1/2 opacity-100",
        !isDarkMode && !isExtend ? "w-full" : "",
      )}
    >
      <FaSun className="text-[1.5rem] text-yellow-500" />
    </div>

    <div
      className={cn(
        "flex items-center justify-center transition-all duration-300 ease-in-out",
        !isDarkMode && !isExtend ? "hidden" : "w-1/2 opacity-100",
        isDarkMode && !isExtend ? "w-full" : "",
      )}
    >
      <FaMoon
        className={cn(
          "text-[1.5rem]",
          isDarkMode ? "text-white" : "text-gray-700",
        )}
      />
    </div>
  </div>
);

const ToggleIndicator = ({ isDarkMode }: { isDarkMode: boolean }) => (
  <div
    className={cn(
      "absolute left-1 top-1 h-10 w-[48%] rounded-full border-2 transition-transform duration-300 ease-in-out",
      isDarkMode
        ? "translate-x-full border-white bg-transparent shadow-lg"
        : "translate-x-0 border-gray-500 bg-transparent shadow-md",
    )}
  ></div>
);

export default ColorModeSwitch;
