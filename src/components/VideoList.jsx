import { Link } from "react-router-dom";
import VideoCard from "../components/VideoCard.jsx";
import useVideoList from "../hook/useVideolist.js";
import ShimmerUI from "./shimmers/ShimmerUI.jsx";

const VideoList = () => {
  let videoListData = useVideoList();
  return (
    <div className="flex flex-wrap justify-evenly md:gap-x-2">
      {videoListData?.length == 0 ? (
        <ShimmerUI />
      ) : (
        videoListData?.map((video) => (
          <Link to={`/watch/?v=${video?.id}`} key={video?.id}>
            <VideoCard info={video} />
          </Link>
        ))
      )}
    </div>
  );
};

export default VideoList;
