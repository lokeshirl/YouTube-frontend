import Sidebar from "./Sidebar.jsx";
import VideoList from "./VideoList.jsx";

const Body = () => {
  return (
    <div className="flex w-full">
      <Sidebar />
      <VideoList />
    </div>
  );
};

export default Body;
