import React from "react";
import { abbreviateNumber, publishedTimeOfVideo } from "../utils/helper.js";

const ReccommendationVideoCard = ({ data }) => {
  const { channelTitle, title, publishedAt } = data?.snippet || {};
  const imageUrl = data?.snippet?.thumbnails?.default?.url || {};
  return (
    <div className="grid grid-cols-12 mb-3 ml-1">
      {/* Thumbnail */}
      <div className="mr-2 col-span-5">
        <img className="h-24 w-80 rounded-lg " alt="thumbnail" src={imageUrl} />
      </div>
      {/* Video Details */}
      <div className="col-span-7">
        <p className="line-clamp-2 mt-1 font-semibold text-sm">{title}</p>
        <p className="line-clamp-1 text-sm text-gray-700">{channelTitle}</p>
        <div className="flex line-clamp-1 text-sm text-gray-500 items-center">
          <p className="mr-1">100K • views</p>
          <span className="mx-1">.</span>
          <p className="">{publishedTimeOfVideo(publishedAt)}</p>
        </div>
      </div>
    </div>
  );
};

export default ReccommendationVideoCard;
