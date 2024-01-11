import React from "react";
import {
  HandThumbUpIcon,
  HandThumbDownIcon,
  EllipsisVerticalIcon,
} from "@heroicons/react/24/outline";
import { abbreviateNumber } from "../utils/helper.js";

const VideoComment = ({ data }) => {
  // get comment necessary details
  data = data?.snippet?.topLevelComment?.snippet;
  const {
    authorDisplayName,
    authorProfileImageUrl,
    likeCount,
    publishedAt,
    textDisplay,
  } = data;

  return (
    <div className="flex mb-2">
      {/* user Image */}
      <img
        className="w-10 h-12 mr-4 py-1 rounded-full"
        alt="user"
        src={authorProfileImageUrl}
      />

      {/* Comment , user name, likes */}
      <div className=" w-full">
        <div className="flex">
          <p className="mr-2 text-base font-semibold">
            @{authorDisplayName.split(" ").join("")}
          </p>
          <p className="">{publishedAt.split("T")[0]}</p>
        </div>
        {/* Comment Text */}
        <p className="">{textDisplay}</p>

        {/* Like Bar */}
        <div className="flex my-1 items-center">
          <HandThumbUpIcon className="h-6 w-6" />
          <p className="text-center mx-2">{abbreviateNumber(likeCount)}</p>
          <HandThumbDownIcon className="h-6 w-6" />
        </div>
      </div>

      {/* More */}
      <div className="mr-3 mt-3 text-xl flex justify-end w-full">
        <EllipsisVerticalIcon className="h-6 w-6" />
      </div>
    </div>
  );
};

export default VideoComment;
