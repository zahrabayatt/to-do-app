import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

const Layout = () => {
  return (
    <div className="w-full h-full flex bg-gray-100 dark:bg-gray-800">
      <Sidebar />
      <main className="w-full h-full max-sm:pl-20">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
