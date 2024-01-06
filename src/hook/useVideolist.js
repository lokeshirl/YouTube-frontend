import { useState, useEffect } from "react";
import { config_urls } from "../conf/config.js";
import fetchDataFromApi from "../utils/api.js";
import { YOUTUBE_VIDEO_LIST_DATA } from "../utils/constants.js";

const useVideoList = () => {
  const [videoListData, setVideoListData] = useState(null);

  const { YOUTUBE_VIDEO_LIST_URI } = config_urls;

  useEffect(() => {
    setVideoListData(YOUTUBE_VIDEO_LIST_DATA?.items);
  }, []);

  // useEffect(() => {
  //   fetchDataFromApi(YOUTUBE_VIDEO_LIST_URI)
  //     .then((res) => setVideoListData(res?.items))
  //     .catch((err) => console.log(err));
  // }, []);

  return videoListData;
};

export default useVideoList;
