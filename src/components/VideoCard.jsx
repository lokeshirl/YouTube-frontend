/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { abbreviateNumber } from "../utils/helper.js";
import { config_urls } from "../conf/config.js";
import fetchDataFromApi from "../utils/api.js";

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
  const viewCount = info?.statistics?.viewCount;
  const { channelTitle, channelId, title, thumbnails } = info?.snippet;
  const imageURL = getImage(thumbnails);

  /* get channel Image
  const [channelImage, setChannelImage] = useState("");
  useEffect(() => {
    fetchDataFromApi(config_urls.YOUTUBE_CHANNEL_DETAILS_URL + channelId)
      .then((data) => {
        const url = data?.items[0]?.snippet?.thumbnails?.high?.url;
        setChannelImage(url);
      })
      .catch((err) => console.log(err));
  }, []);
 */

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
