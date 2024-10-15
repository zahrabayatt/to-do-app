import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

const Layout = () => {
  return (
    <div className="min-h-screen w-full flex">
      <Sidebar />
      <main className="flex-grow w-full h-full max-sm:pl-20">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
