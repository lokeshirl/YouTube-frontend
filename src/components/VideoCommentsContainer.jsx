import VideoComment from "./VideoComment.jsx";
import useFetch from "../hook/useFetch.js";
import { config_urls } from "../conf/config.js";
import { abbreviateNumber } from "../utils/helper.js";

const VideoCommentsContainer = ({ videoId, commentCount }) => {
  // const commentslist = useFetch(
  //   config_urls.YOUTUBE_VIDEO_COMMENTS_DETAILS_URL + videoId
  // );

  commentslist = undefined;
  return (
    <div>
      <p className="my-2">{abbreviateNumber(commentCount)} Comments</p>
      {commentslist?.items?.map((comment, index) => (
        <VideoComment key={index} data={comment} />
      ))}
    </div>
  );
};

export default VideoCommentsContainer;
