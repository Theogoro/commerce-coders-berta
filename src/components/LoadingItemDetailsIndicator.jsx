const LoadingItemDetailsIndicator = () => {
  return (
    <div className="animate-pulse shadow rounded-md mx-auto mt-6 w-60 overflow-hidden rounded-md">
      <div className=" flex flex-col content-center">
        <div className="flex-1 p-4">
          <div className="rounded bg-amber-700 h-20 w-20 mx-auto mb-6"></div>
          <div className="h-2 bg-amber-700 rounded"></div>
        </div>
        <div className="bg-amber-700 h-8 w-full space-x-0"></div>
      </div>
    </div>
  );
};

export default LoadingItemDetailsIndicator;
