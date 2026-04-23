// import Header from "@/app/components/Header";
// import Sidebar from "@/app/components/Sidebar";


// export default function MainLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <div className="flex min-h-screen bg-white dark:bg-[#0f172a] text-black dark:text-white">
      
//       <Sidebar />

//       <div className="flex-1 flex flex-col">
        
//         <Header />

//         <main className="p-6">
//           {children}
//         </main>

//       </div>
//     </div>
//   );
// }

"use client";

import { useState } from "react";
import Header from "@/app/components/Header";
import Sidebar from "@/app/components/Sidebar";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-white dark:bg-[#0f172a] text-black dark:text-white">

      {/* Sidebar */}
      <div
        className={`fixed z-50 inset-y-0 left-0 transform bg-white dark:bg-[#1e293b] transition-transform duration-300
        ${open ? "translate-x-0" : "-translate-x-full"} md:translate-x-0 md:static`}
      >
        <Sidebar close={() => setOpen(false)} />
      </div>

      {/* Overlay (mobile only) */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Main Content */}
      <div className="flex-1 flex flex-col">

        {/* Header */}
        <Header toggleSidebar={() => setOpen(true)} />

        {/* Page Content */}
        <main className="p-4 md:p-6">
          {children}
        </main>

      </div>
    </div>
  );
}