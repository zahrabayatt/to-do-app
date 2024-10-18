import { FaAngleRight } from "react-icons/fa";
import { cn } from "../utils";

interface Props {
  isToggle: boolean;
  setToggle: (open: boolean) => void;
}

const ToggleButton = ({ isToggle, setToggle }: Props) => {
  return (
    <FaAngleRight
      className={cn(
        "absolute -right-3 top-8 cursor-pointer rounded-full border-2 border-dark-purple bg-white p-1",
        isToggle && "rotate-180",
      )}
      size={30}
      onClick={() => setToggle(!isToggle)}
    />
  );
};

export default ToggleButton;
