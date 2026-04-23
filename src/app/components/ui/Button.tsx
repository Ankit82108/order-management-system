"use client";

export default function Button({
  children,
  variant = "primary",
  onClick,
  className = "",
}: {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "danger";
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void; // ✅ FIX
  className?: string;
}) {
  const base =
    "px-4 py-2 rounded-lg text-sm font-medium transition active:scale-95 cursor-pointer";

  const styles = {
    primary:
      "text-white bg-gradient-to-r from-indigo-500 to-purple-500 hover:opacity-90",
    secondary:
      "bg-gray-200 dark:bg-gray-700 text-black dark:text-white hover:opacity-90",
    danger: "bg-red-500 text-white hover:opacity-90",
  };

  return (
    <button
      onClick={onClick}
      className={`${base} ${styles[variant]} ${className}`}
    >
      {children}
    </button>
  );
}