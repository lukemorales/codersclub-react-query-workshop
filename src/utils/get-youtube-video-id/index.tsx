export const getYoutubeVideoId = (url: string) => {
  const [, info] = url.split('embed/');

  const [videoId] = info.split('?');

  return videoId;
};
