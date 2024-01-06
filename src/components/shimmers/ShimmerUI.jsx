// Shimmer UI for Home Page Videos
const ShimmerUI = () => {
  return (
    <div className="flex flex-wrap">
      {Array(10)
        .fill("")
        .map((arr, index) => (
          <div key={index} className="m-2 w-60 h-[300px] shadow-lg bg-gray-100">
            <div className="w-50 h-[150px] bg-gray-200 rounded-lg"></div>
          </div>
        ))}
    </div>
  );
};

export default ShimmerUI;
