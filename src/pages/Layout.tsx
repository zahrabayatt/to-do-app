import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

const Layout = () => {
  return (
    <div className="flex">
      <Sidebar />
      <main className="w-full max-sm:pl-20">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
