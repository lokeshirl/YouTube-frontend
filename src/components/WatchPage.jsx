import { useSearchParams } from "react-router-dom";
import WatchPageVideoDescription from "./WatchPageVideoDescription.jsx";
import Recommendations from "./Recommendations.jsx";
import useFetch from "../hook/useFetch.js";
import { config_urls } from "../conf/config.js";

const WatchPage = () => {
  const [URLsearchParams] = useSearchParams();
  const videoId = URLsearchParams.get("v");

  // const videoDetailsData = useFetch(
  //   config_urls.YOUTUBE_VIDEO_DETAILS_URL + videoId
  // );

  const videoDetailsData = undefined;

  const channelId = videoDetailsData?.items?.[0]?.snippet?.channelId;

  return (
    <div className="p-2 w-full pl-10 grid grid-cols-12">
      <div className="flex flex-col col-span-12 md:col-span-8 overflow-x-hidden mr-2">
        <div className="">
          {/* Video Tab */}
          <iframe
            data-testid="iframe"
            width="100%"
            height="450"
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=0`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="rounded-xl"
          ></iframe>
        </div>
        {/* Title,Description,Channel Details,Comments of Video */}
        <WatchPageVideoDescription
          videoDetailsData={videoDetailsData}
          videoId={videoId}
        />
      </div>
      <div className="col-span-4 p-1 hidden md:block">
        <div className="w-full">
          {/* {showChat && <ChatContainer />} */}
          <div className="w-full flex justify-center rounded-3xl ">
            {/* <button data-testid="show-chat" onClick={()=>setShowLiveChat(!showChat)} className='w-full py-2 border rounded-3xl my-2 hover:bg-gray-200'>{showChat ? "Hide chat" : "Show chat"}</button> */}
          </div>
        </div>
        <Recommendations videoId={videoId} channelId={channelId} />
      </div>
    </div>
  );
};

export default WatchPage;
