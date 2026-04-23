
// "use client";

// import { useEffect, useState } from "react";

// export default function Header() {
//   const [dark, setDark] = useState(false);

//   useEffect(() => {
//     const savedTheme = localStorage.getItem("theme");

//     if (savedTheme === "dark") {
//       document.documentElement.classList.add("dark");
//       setDark(true);
//     } else {
//       document.documentElement.classList.remove("dark");
//       setDark(false);
//     }
//   }, []);

//   const toggleTheme = () => {
//     if (dark) {
//       document.documentElement.classList.remove("dark");
//       localStorage.setItem("theme", "light");
//     } else {
//       document.documentElement.classList.add("dark");
//       localStorage.setItem("theme", "dark");
//     }

//     setDark(!dark);
//   };

//   return (
//     <div className="flex justify-between items-center p-4 border-b border-gray-200 dark:border-gray-700 bg-white/70 dark:bg-[#0f172a]/80 backdrop-blur-md">

//       <h1 className="text-lg font-semibold">Order Management</h1>

//       <button
//         onClick={toggleTheme}
//         className="px-4 py-2 rounded-lg text-white bg-gradient-to-r from-indigo-500 to-purple-500 transition hover:scale-105 active:scale-95 cursor-pointer"
//       >
//         {dark ? "☀ Light" : "🌙 Dark"}
//       </button>

//     </div>
//   );
// }


"use client";

import { useEffect, useState } from "react";

export default function Header({
  toggleSidebar,
}: {
  toggleSidebar: () => void;
}) {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setDark(true);
    } else {
      document.documentElement.classList.remove("dark");
      setDark(false);
    }
  }, []);

  const toggleTheme = () => {
    if (dark) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }

    setDark(!dark);
  };

  return (
    <div className="flex justify-between items-center p-4 border-b border-gray-200 dark:border-gray-700 bg-white/70 dark:bg-[#0f172a]/80 backdrop-blur-md">

      {/* Left side */}
      <div className="flex items-center gap-3">

        {/* Hamburger (mobile only) */}
        <button
          onClick={toggleSidebar}
          className="md:hidden p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:scale-105 transition"
        >
          ☰
        </button>

        <h1 className="text-lg font-semibold">Order Management</h1>

      </div>

      {/* Theme button */}
      <button
        onClick={toggleTheme}
        className="px-4 py-2 rounded-lg text-white bg-gradient-to-r from-indigo-500 to-purple-500 transition hover:scale-105 active:scale-95 cursor-pointer"
      >
        {dark ? "☀ Light" : "🌙 Dark"}
      </button>

    </div>
  );
}