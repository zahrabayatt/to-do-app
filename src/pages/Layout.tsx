import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

const Layout = () => {
  return (
    <div className="flex h-full w-full bg-gray-100 dark:bg-gray-800">
      <Sidebar />
      <main className="h-full w-full max-sm:pl-20">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
