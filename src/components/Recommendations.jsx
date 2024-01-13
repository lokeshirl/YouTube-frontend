import { useEffect } from "react";
import { config_urls } from "../conf/config.js";
import useRecommendations from "../hook/useRecommendations.js";
import ReccommendationVideoCard from "./ReccommendationVideoCard.jsx";
import { Link } from "react-router-dom";

const Recommendations = ({ videoId, channelId }) => {
  const recommendationList = useRecommendations(channelId);

  return (
    <div>
      {
        // Recommended Video Lists
        recommendationList?.items?.map((recvideo, index) => (
          <Link
            to={"/watch?v=" + recvideo?.contentDetails?.upload?.videoId}
            key={index}
          >
            <ReccommendationVideoCard data={recvideo} />
          </Link>
        ))
      }
    </div>
  );
};

export default Recommendations;
