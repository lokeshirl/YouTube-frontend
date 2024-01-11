import { useEffect, useState } from "react";
import { config_urls } from "../conf/config.js";
import fetchDataFromApi from "../utils/api.js";

const useRecommendations = (channelId) => {
  const [recommendationsList, setRecommendationsList] = useState(null);
  useEffect(() => {
    fetchDataFromApi(config_urls.YOUTUBE_VIDEO_RECOMMENDATION_URL + channelId)
      .then((data) => setRecommendationsList(data))
      .catch((err) => console.log(err));
  }, [channelId]);

  return recommendationsList;
};

export default useRecommendations;
