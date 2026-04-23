"use client";

import MainLayout from "@/layout/MainLayout";

import { useEffect, useState } from "react";
import LoadingState from "./components/ui/LoadingState";
import EmptyState from "./components/ui/EmptyState";
import Card from "./components/ui/Card";

const stats = [
  { title: "Total Orders", value: 120, color: "from-indigo-500 to-purple-500" },
  { title: "Pending", value: 20, color: "from-yellow-500 to-orange-500" },
  { title: "In Progress", value: 45, color: "from-blue-500 to-indigo-500" },
  { title: "Completed", value: 40, color: "from-green-500 to-emerald-500" },
  { title: "Cancelled", value: 15, color: "from-red-500 to-pink-500" },
];

export default function Dashboard() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 800);
  }, []);

  return (
    <MainLayout>
      <div className="space-y-6">

        <h2 className="text-2xl font-semibold">Dashboard</h2>

        {/* Loading State */}
        {loading ? (
          <LoadingState />
        ) : stats.length === 0 ? (
          <EmptyState text="No data available 📊" />
        ) : (
          <>
            {/* Stats Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {stats.map((item, index) => (
                <Card key={index} className="p-4">

                  <p className="text-xs text-gray-400">{item.title}</p>

                  <h3 className="text-2xl font-semibold mt-1">
                    {item.value}
                  </h3>

                  <div
                    className={`mt-4 h-2 rounded-full bg-gradient-to-r ${item.color}`}
                  ></div>

                </Card>
              ))}
            </div>

            {/* Chart */}
            <Card className="p-4 border border-gray-100 dark:border-gray-700 cursor-pointer">
              <h3 className="text-lg font-semibold mb-6">Orders Overview</h3>

              <div className="flex items-end gap-2 sm:gap-4 h-40">
                {[40, 60, 30, 80, 50, 70].map((height, i) => (
                  <div
                    key={i}
                    className="flex-1 bg-gradient-to-t from-indigo-500 to-purple-500 rounded-md hover:scale-105 transition"
                    style={{ height: `${height}%` }}
                  ></div>
                ))}
              </div>
            </Card>
          </>
        )}

      </div>
    </MainLayout>
  );
}