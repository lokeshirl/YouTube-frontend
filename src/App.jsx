import Header from "./components/Header.jsx";
import { Outlet } from "react-router-dom";
const App = () => {
  return (
    <div className="w-11/12 h-screen mx-auto md:w-[96%]">
      <Header />
      <Outlet />
    </div>
  );
};

export default App;
