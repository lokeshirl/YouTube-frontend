import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar.jsx";

const Body = () => {
  return (
    <div className="flex scroll-smooth">
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default Body;
