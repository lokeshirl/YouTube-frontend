import { CheckCircleIcon } from "@heroicons/react/24/solid";

const VideoCard = () => {
  return (
    <div className="flex flex-col gap-2 w-full cursor-pointer p-2 shadow-sm md:w-72">
      <img
        src="https://i.ytimg.com/vi/doLgEKDtJ7s/hq720_live.jpg?sqp=COyw1qwG-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDIjZv1SYUqJ1IFgssRKo-bCethKA"
        alt="thumbnail"
        className="w-full rounded-md"
      />
      <h2 className="font-bold text-sm">
        Frontend Interview DOM Question Part 1 | Lokeshirl 🔥
      </h2>
      <h3 className="flex items-end gap-1 text-sm">
        <span>Pyush Garg</span>
        <CheckCircleIcon className="w-4 h-4 text-blue-500" />
      </h3>
      <h3 className="text-sm">100k • views</h3>
    </div>
  );
};

export default VideoCard;
