import { FaAngleRight } from "react-icons/fa";
import { cn } from "../helpers/utils";

interface Props {
  isToggle: boolean;
  setToggle: (open: boolean) => void;
}

const ToggleButton = ({ isToggle, setToggle }: Props) => {
  return (
    <FaAngleRight
      className={cn(
        "bg-white absolute cursor-pointer -right-3 top-8  border-dark-purple border-2 p-1 rounded-full",
        isToggle && "rotate-180"
      )}
      size={30}
      onClick={() => setToggle(!isToggle)}
    />
  );
};

export default ToggleButton;
