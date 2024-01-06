/* eslint-disable react/prop-types */
import { abbreviateNumber } from "../utils/helper.js";

const getImage = (thumbnail) => {
  const sizes = ["maxres", "medium", "standard", "high", "default"];

  for (const size of sizes) {
    if (thumbnail[size]) {
      return thumbnail[size]?.url;
    }
  }

  return undefined;
};

const VideoCard = ({ info }) => {
  const title = info?.snippet?.title;
  const channelTitle = info?.snippet?.channelTitle;
  const viewCount = info?.statistics?.viewCount;

  const thumbnail = info?.snippet?.thumbnails;
  const imageURL = getImage(thumbnail);

  const channelImage =
    "https://yt3.googleusercontent.com/ytc/AIf8zZRr-XxwSuOW9kwN9wXTxhmT-I3A1dhcYKmiBz4h9g=s176-c-k-c0x00ffffff-no-rj";

  return (
    <div className="flex flex-col m-2 w-[312px] h-[300px] hover:bg-gray-50 rounded-lg">
      {/* Main Image - Thumbnail*/}
      <img className="rounded-lg mb-2" alt="thumbnail" src={imageURL} />
      <div>
        {/* Image and Title Div */}
        <div className="flex flex-row items-center">
          {/* #UPDATE - Will add this later */}
          <img className="w-10 h-10 mr-1 rounded-full" src={channelImage} />
          <p className="font-semibold line-clamp-2 text-base font-sans">
            {title}
          </p>
        </div>
        {/* Channel Name And Views Count */}
        <div className="pl-10 text-sm">
          <p className="my-[0.15rem]">{channelTitle}</p>
          <p className="">{abbreviateNumber(viewCount)} • views</p>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
