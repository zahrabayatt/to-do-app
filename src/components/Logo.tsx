import { Link } from "@tanstack/react-router";
import { cn } from "../utils";
import logo from "../assets/logo.webp";

const Logo = () => {
  return (
    <div className="flex items-center gap-x-4">
      <Link to={"/"} className="size-8 shrink-0">
        <img
          src={logo}
          className="size-full cursor-pointer"
          alt="To Do App Logo"
        />
      </Link>

      <h1
        className={cn(
          "origin-left overflow-hidden whitespace-nowrap text-xl font-bold text-white",
        )}
      >
        To Do App
      </h1>
    </div>
  );
};

export default Logo;
