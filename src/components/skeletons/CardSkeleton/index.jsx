const CardSkeleton = () => {
  return (
    <div className="animate-pulse overflow-hidden rounded-md">
      <div className="h-60 w-full bg-slate-200" />
      <div className="p-4">
        <div className="space-y-2">
          <div className="h-2 max-w-20 bg-slate-200" />
          <div className="h-4 max-w-40 bg-slate-200" />
          <div className="space-y-1">
            <div className="h-3 bg-slate-200" />
            <div className="h-3 bg-slate-200" />
            <div className="h-3 max-w-20 bg-slate-200" />
          </div>
        </div>
        <div className="mt-4 h-8 rounded-md bg-slate-200" />
      </div>
    </div>
  );
};

export default CardSkeleton;
