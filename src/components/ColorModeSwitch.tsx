import { useEffect, useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import { cn } from "../helpers/utils";

interface Props {
  isExtend?: boolean;
}

const ColorModeSwitch = ({ isExtend = true }: Props) => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedMode = localStorage.getItem("colorMode");
    return savedMode
      ? savedMode === "dark"
      : window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDarkMode);
    localStorage.setItem("colorMode", isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  const toggleMode = () => setIsDarkMode((prev) => !prev);

  return (
    <div className="flex items-center justify-center p-4 w-full max-w-md mx-auto">
      <div
        className={cn(
          "relative flex items-center h-12 rounded-full cursor-pointer transition-all duration-300 ease-in-out",
          isDarkMode ? "bg-gray-700" : "bg-slate-50",
          isExtend ? "w-full" : "w-20"
        )}
        onClick={toggleMode}
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
        "flex justify-center items-center transition-all duration-300 ease-in-out",
        isDarkMode && !isExtend ? "hidden" : "opacity-100 w-1/2",
        !isDarkMode && !isExtend ? "w-full" : ""
      )}
    >
      <FaSun className="text-yellow-500 text-[1.5rem]" />
    </div>

    <div
      className={cn(
        "flex justify-center items-center transition-all duration-300 ease-in-out",
        !isDarkMode && !isExtend ? "hidden" : "opacity-100 w-1/2",
        isDarkMode && !isExtend ? "w-full" : ""
      )}
    >
      <FaMoon
        className={cn(
          "text-[1.5rem]",
          isDarkMode ? "text-white" : "text-gray-700"
        )}
      />
    </div>
  </div>
);

const ToggleIndicator = ({ isDarkMode }: { isDarkMode: boolean }) => (
  <div
    className={cn(
      "w-[48%] absolute top-1 left-1 h-10 rounded-full transition-transform duration-300 ease-in-out border-2",
      isDarkMode
        ? "translate-x-full bg-transparent border-white shadow-lg"
        : "translate-x-0 bg-transparent border-gray-500 shadow-md"
    )}
  ></div>
);

export default ColorModeSwitch;
