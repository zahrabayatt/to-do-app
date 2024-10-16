import { Link } from "react-router-dom";
import { cn } from "../utils";
import logo from "../assets/logo.webp";

const Logo = () => {
  return (
    <div className="flex gap-x-4 items-center">
      <Link to={"/"} className="size-8 shrink-0">
        <img
          src={logo}
          className="size-full cursor-pointer"
          alt="To Do App Logo"
        />
      </Link>

      <h1
        className={cn(
          "text-white origin-left font-bold text-xl whitespace-nowrap overflow-hidden"
        )}
      >
        To Do App
      </h1>
    </div>
  );
};

export default Logo;
