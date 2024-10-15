import { cn } from "../utils";

interface Props {
  color?: string;
  thickness?: string;
  width?: string;
  margin?: string;
}

const Divider = ({
  color = "bg-gray-300",
  thickness = "h-px",
  width = "w-full",
  margin = "my-4",
}: Props) => {
  return (
    <div
      className={cn(color, thickness, width, margin)}
      aria-hidden="true"
    ></div>
  );
};

export default Divider;
