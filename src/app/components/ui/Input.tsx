"use client";

export default function Input({
  value,
  onChange,
  placeholder,
  type = "text",
  className = "",
}: {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; // ✅ FIX TYPE
  placeholder?: string;
  type?: string;
  className?: string; // ✅ ADD THIS
}) {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-800 outline-none ${className}`} // ✅ MERGE
    />
  );
}