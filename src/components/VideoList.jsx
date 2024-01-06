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
          <VideoCard key={video?.id} info={video} />
        ))
      )}
    </div>
  );
};

export default VideoList;
