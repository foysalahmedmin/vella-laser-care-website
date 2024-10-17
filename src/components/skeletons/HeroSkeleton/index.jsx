const HeroSkeleton = () => {
  return (
    <div className="flex w-full animate-pulse flex-col items-center gap-4 md:flex-row">
      <div className="flex-1">
        <div className="relative aspect-[6/5] w-full">
          <div className="absolute right-0 top-0 z-10 h-5/6 w-7/12 rounded-md rounded-tr-[8rem] border-8 border-background bg-slate-200" />
          <div className="absolute bottom-0 left-0 h-5/6 w-7/12 rounded-md rounded-bl-[8rem] border-8 border-background bg-slate-200" />
        </div>
      </div>
      <div className="flex flex-1 items-center">
        <div className="flex-1 space-y-4">
          <div className="mb-4 flex h-4 max-w-32 items-center gap-2 bg-slate-200" />
          <div className="space-y-1">
            <div className="flex h-6 max-w-60 items-center gap-2 bg-slate-200" />
            <div className="flex h-6 max-w-40 items-center gap-2 bg-slate-200" />
          </div>
          <div className="space-y-1">
            <div className="h-3 bg-slate-200" />
            <div className="h-3 bg-slate-200" />
            <div className="h-3 bg-slate-200" />
            <div className="h-3 bg-slate-200" />
            <div className="h-3 max-w-20 bg-slate-200" />
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <div className="size-4 bg-slate-200" />
            <div className="size-4 bg-slate-200" />
            <div className="size-4 bg-slate-200" />
            <div className="size-4 bg-slate-200" />
          </div>
          <div className="h-8 max-w-20 rounded-md bg-slate-200" />
        </div>
      </div>
    </div>
  );
};

export default HeroSkeleton;
