export default function Loading() {
  return (
    <div className="min-h-screen bg-bg flex items-center justify-center">
      <div className="animate-pulse space-y-4 w-full max-w-4xl px-6">
        <div className="h-8 bg-surface rounded w-1/4"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="card">
              <div className="h-4 bg-bg rounded w-3/4 mb-4"></div>
              <div className="h-32 bg-bg rounded mb-4"></div>
              <div className="space-y-2">
                <div className="h-3 bg-bg rounded"></div>
                <div className="h-3 bg-bg rounded w-5/6"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
