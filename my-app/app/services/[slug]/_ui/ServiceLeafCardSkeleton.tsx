const ServiceLeafCardSkeleton = () => {
  return (
    <article className="rounded-2xl border border-gray-200 bg-gray-50 p-5 shadow-sm animate-pulse">
      <div className="space-y-4">
        <div className="h-8 w-2/3 rounded bg-gray-200" />
        <div className="space-y-2">
          <div className="h-4 w-full rounded bg-gray-200" />
          <div className="h-4 w-11/12 rounded bg-gray-200" />
          <div className="h-4 w-3/4 rounded bg-gray-200" />
        </div>
        <div className="h-px w-full bg-gray-200" />
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <div className="h-4 w-5/6 rounded bg-gray-200" />
            <div className="h-4 w-2/3 rounded bg-gray-200" />
            <div className="h-4 w-4/5 rounded bg-gray-200" />
          </div>
          <div className="h-48 w-full rounded-xl bg-gray-200" />
        </div>
      </div>
    </article>
  );
};

export default ServiceLeafCardSkeleton;
