export default function LoadingState() {
  return (
    <div className="space-y-3 animate-pulse">
      <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-1/2"></div>
      <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-2/3"></div>
      <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-1/3"></div>
    </div>
  );
}