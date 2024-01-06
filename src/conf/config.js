export const config_keys = {
  YOUTUBE_API_KEY: String(import.meta.env.VITE_YOUTUBE_API_KEY),
};

export const config_urls = {
  YOUTUBE_VIDEO_LIST_URI: `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=${
    import.meta.env.VITE_YOUTUBE_API_KEY
  }`,
};
