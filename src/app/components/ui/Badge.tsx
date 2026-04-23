export default function Badge({
  children,
  type = "default",
}: {
  children: React.ReactNode;
  type?: "default" | "success" | "danger";
}) {
  const styles = {
    default:
      "bg-gradient-to-r from-indigo-500 to-purple-500 text-white",
    success: "bg-green-500 text-white",
    danger: "bg-red-500 text-white",
  };

  return (
    <span className={`px-3 py-1 rounded-full text-xs ${styles[type]}`}>
      {children}
    </span>
  );
}