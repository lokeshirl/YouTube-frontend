import { useState, useEffect } from "react";
import { YOUTUBE_VIDEO_LIST_DATA } from "../utils/constants.js";
import useFetch from "./useFetch.js";
import { config_urls } from "../conf/config.js";

const useVideoList = () => {
  const videoListData = useFetch(config_urls.YOUTUBE_VIDEO_LIST_URL);
  return videoListData?.items;
};

export default useVideoList;
