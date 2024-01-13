export const config_keys = {
  YOUTUBE_API_KEY: String(import.meta.env.VITE_YOUTUBE_API_KEY),
};

export const config_urls = {
  YOUTUBE_VIDEO_LIST_URL: `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=${
    import.meta.env.VITE_YOUTUBE_API_KEY
  }`,
  YOUTUBE_VIDEO_DETAILS_URL: `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&key=${
    import.meta.env.VITE_YOUTUBE_API_KEY
  }&id=`,
  YOUTUBE_VIDEO_COMMENTS_DETAILS_URL: `https://www.googleapis.com/youtube/v3/commentThreads?textFormat=plainText&part=snippet&maxResults=100&order=relevance&key=${
    import.meta.env.VITE_YOUTUBE_API_KEY
  }&videoId=`,
  YOUTUBE_VIDEO_RECOMMENDATION_URL: `https://www.googleapis.com/youtube/v3/activities?part=snippet%2CcontentDetails&maxResults=50&regionCode=in&key=${
    import.meta.env.VITE_YOUTUBE_API_KEY
  }&channelId=`,
  YOUTUBE_CHANNEL_DETAILS_URL: `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&key=${
    import.meta.env.VITE_YOUTUBE_API_KEY
  }&id=`,
  YOUTUBE_SEARCH_AUTOCOMPLETE_URL: `https://clients1.google.com/complete/search?client=youtube&gs_ri=youtube&ds=yt&q=`,
};
