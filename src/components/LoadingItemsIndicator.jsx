const LoadingItemsIndicator = () => {
  return (
    <div className="border border-amber-500 shadow rounded-md p-4 max-w-sm w-full mx-auto">
      <div className="animate-pulse flex flex-col content-center space-x-4">
        <div className="rounded-full bg-amber-700 h-20 w-20 mx-auto mb-6"></div>
        <div className="flex-1 space-y-6 py-1">
          <div className="h-2 bg-amber-700 rounded"></div>
          <div className="space-y-3">
            <div className="grid grid-cols-3 gap-4">
              <div className="h-2 bg-amber-700 rounded col-span-2"></div>
              <div className="h-2 bg-amber-700 rounded col-span-1"></div>
            </div>
            <div className="h-2 bg-amber-700 rounded"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingItemsIndicator;