export function abbreviateNumber(number) {
  number = Number(number);
  if (number >= 1000000) {
    return (number / 1000000).toFixed(1) + "M";
  } else if (number >= 1000) {
    return (number / 1000).toFixed(0) + "K";
  } else {
    return number.toString();
  }
}

export const publishedTimeOfVideo = (publishedAt) => {
  const publishedDate = new Date(publishedAt);
  const currentDate = new Date();
  if (currentDate.getFullYear() - publishedDate.getFullYear()) {
    return (
      currentDate.getFullYear() - publishedDate.getFullYear() + " years ago"
    );
  } else {
    if (currentDate.getMonth() - publishedDate.getMonth()) {
      return currentDate.getMonth() - publishedDate.getMonth() + " months ago";
    } else {
      if (currentDate.getDate() - publishedDate.getDate() == 0) return "Today";
      if (currentDate.getDate() - publishedDate.getDate() == 1)
        return "1 day ago";
      return currentDate.getDate() - publishedDate.getDate() + " days ago";
    }
  }
};
