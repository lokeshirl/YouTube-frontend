import { useState, useEffect } from "react";
import { config_urls } from "../conf/config.js";
import { abbreviateNumber, publishedTimeOfVideo } from "../utils/helper.js";
import {
  HandThumbUpIcon,
  HandThumbDownIcon,
  ShareIcon,
  EllipsisHorizontalIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";
import VideoCommentsContainer from "./VideoCommentsContainer.jsx";
import fetchDataFromApi from "../utils/api.js";

const WatchPageVideoDescription = ({ videoId, videoDetailsData }) => {
  const [toggleDescriptionDropdown, setToggleDescriptionDropdown] =
    useState(false);

  const handleToggleDescriptionDropdown = () => {
    setToggleDescriptionDropdown(!toggleDescriptionDropdown);
  };

  const { channelId, channelTitle, description, tags, title, publishedAt } =
    videoDetailsData?.items?.[0]?.snippet || {};
  const { commentCount, likeCount, viewCount } =
    videoDetailsData?.items?.[0]?.statistics || {};

  const [channelImage, setChannelImage] = useState("");
  // useEffect(() => {
  //   fetchDataFromApi(config_urls.YOUTUBE_CHANNEL_DETAILS_URL + channelId)
  //     .then((data) => {
  //       const url = data?.items[0]?.snippet?.thumbnails?.high?.url;
  //       setChannelImage(url);
  //     })
  //     .catch((err) => console.log(err));
  // }, [channelId]);

  return (
    <div className="flex flex-col w-full">
      {/* Video Title */}
      <div className="my-2 font-semibold text-lg">{title}</div>

      {/* Channel Details And lIkes */}
      <div className="flex items-center my-2 justify-between">
        <div className="flex items-center ">
          <img className="w-10 h-10 mr-1 rounded-full" src={channelImage} />
          <p className="font-semibold line-clamp-2 text-base font-sans">
            {channelTitle}
          </p>
          <div>
            <button className="mx-4 p-2 px-4 bg-black text-white rounded-full">
              Subscribe
            </button>
          </div>
        </div>
        {/* Likes and DisLikes */}
        <div className="flex items-center max-sm:hidden">
          <div className="m-2  flex items-center bg-gray-100 p-2 px-6 rounded-full border-white">
            <HandThumbUpIcon className="h-6 w-6" />
            <p className="mx-1 text-sm">{abbreviateNumber(likeCount)}</p>
            <p className="mx-1">|</p>
            <HandThumbDownIcon className="h-6 w-6" />
          </div>

          {/* Share Button */}
          <div className="m-2 flex items-center text-center bg-gray-100 p-2 px-6 rounded-full justify-between  border-white ">
            <ShareIcon className="h-6 w-6" />
            <p className="font-medium ml-1">Share</p>
          </div>

          {/* More */}
          <div className="bg-gray-100 p-2 rounded-full ml-2 border-white hidden md:block ">
            <EllipsisHorizontalIcon className="h-6 w-6" />
          </div>
        </div>
      </div>

      {/* View count,Date,Tags and Description */}
      <div
        className="bg-gray-100 p-2 rounded-xl px-4 cursor-pointer"
        onClick={handleToggleDescriptionDropdown}
      >
        {/* viewCount and Date */}
        <div className="flex items-center justify-between">
          <span className="lg:ml-2 font-medium">
            {abbreviateNumber(viewCount)} • views •{" "}
            {publishedTimeOfVideo(publishedAt)}
          </span>
          <span
            onClick={handleToggleDescriptionDropdown}
            className="rounded-full hover:bg-slate-200 p-1 cursor-pointer"
          >
            <ChevronDownIcon className="w-4 h-4" />
          </span>
        </div>
        {/* Description */}
        <div className={`${toggleDescriptionDropdown ? "block" : "hidden"}`}>
          <p className="text-clip">{description}</p>
        </div>
      </div>

      {/* comment Section */}
      <div className="p-2">
        <VideoCommentsContainer videoId={videoId} commentCount={commentCount} />
      </div>
    </div>
  );
};

export default WatchPageVideoDescription;
