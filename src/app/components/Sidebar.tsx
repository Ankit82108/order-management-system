// "use client";

// import Link from "next/link";
// import { usePathname } from "next/navigation";

// const menu = [
//   { name: "Dashboard", path: "/" },
//   { name: "Orders", path: "/orders" },
//   { name: "Create Order", path: "/create" },
//   { name: "Notifications", path: "/notifications" },
// ];

// export default function Sidebar() {
//   const pathname = usePathname();

//   return (
//     <div className="w-64 max-md:w-full max-md:min-h-auto min-h-screen bg-white dark:bg-[#1e293b] border-r border-gray-200 dark:border-gray-700 p-4 flex flex-col justify-between transition-all duration-300">

//       <div>
//         <h2 className="text-xl font-semibold mb-8 tracking-wide">OMS</h2>

//         <div className="flex flex-col gap-2">
//           {menu.map((item) => {
//             const active = pathname === item.path;

//             return (
//               <Link key={item.path} href={item.path}>
//                 <div
//                   className={`px-4 py-2 rounded-lg cursor-pointer transition-all duration-200 flex items-center justify-between
//                     ${
//                       active
//                         ? "bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-sm"
//                         : "hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-300 hover:translate-x-1"
//                     }
//                   `}
//                 >
//                   <span>{item.name}</span>

//                   {active && (
//                     <span className="w-2 h-2 bg-white rounded-full"></span>
//                   )}
//                 </div>
//               </Link>
//             );
//           })}
//         </div>
//       </div>

//       <div className="text-sm text-gray-400 mt-6 text-center md:text-left">
//         © 2026 OMS
//       </div>
//     </div>
//   );
// }


"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const menu = [
  { name: "Dashboard", path: "/" },
  { name: "Orders", path: "/orders" },
  { name: "Create Order", path: "/create" },
  { name: "Notifications", path: "/notifications" },
];

export default function Sidebar({
  close,
}: {
  close?: () => void;
}) {
  const pathname = usePathname();

  return (
    <div className="w-64 min-h-screen bg-white dark:bg-[#1e293b] border-r border-gray-200 dark:border-gray-700 p-4 flex flex-col justify-between">

      {/* Top */}
      <div>
        <h2 className="text-xl font-semibold mb-8 tracking-wide">OMS</h2>

        <div className="flex flex-col gap-2">
          {menu.map((item) => {
            const active = pathname === item.path;

            return (
              <Link key={item.path} href={item.path}>
                <div
                  onClick={close} // 🔥 mobile me click pe close
                  className={`px-4 py-2 rounded-lg cursor-pointer transition-all duration-200 flex items-center justify-between
                    ${
                      active
                        ? "bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-sm"
                        : "hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-300 hover:translate-x-1"
                    }
                  `}
                >
                  <span>{item.name}</span>

                  {active && (
                    <span className="w-2 h-2 bg-white rounded-full"></span>
                  )}
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      {/* Bottom */}
      <div className="text-sm text-gray-400 mt-6 text-center md:text-left">
        © 2026 OMS
      </div>
    </div>
  );
}