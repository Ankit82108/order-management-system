"use client";

import MainLayout from "@/layout/MainLayout";
import { useState, useEffect } from "react";
import LoadingState from "../components/ui/LoadingState";
import ErrorState from "../components/ui/ErrorState";
import EmptyState from "../components/ui/EmptyState";
import Card from "../components/ui/Card";


const initialNotifications = [
  {
    id: 1,
    text: "Order #ORD123 marked as In Progress",
    time: "2 min ago",
    read: false,
    group: "Today",
  },
  {
    id: 2,
    text: "Order #ORD124 has been completed",
    time: "10 min ago",
    read: false,
    group: "Today",
  },
  {
    id: 3,
    text: "New order #ORD125 created",
    time: "1 hour ago",
    read: true,
    group: "Earlier",
  },
];

export default function Notifications() {
  const [notifications, setNotifications] = useState(initialNotifications);

  const [loading, setLoading] = useState(true);
  const error = false; // toggle true to simulate error

  useEffect(() => {
    setTimeout(() => setLoading(false), 700);
  }, []);

  const markAsRead = (id: number) => {
    setNotifications((prev) =>
      prev.map((n) =>
        n.id === id ? { ...n, read: true } : n
      )
    );
  };

  const grouped = {
    Today: notifications.filter((n) => n.group === "Today"),
    Earlier: notifications.filter((n) => n.group === "Earlier"),
  };

  return (
    <MainLayout>
      <div className="max-w-2xl mx-auto space-y-6">

        <h2 className="text-2xl font-semibold">Notifications</h2>

        {loading ? (
          <LoadingState />
        ) : error ? (
          <ErrorState />
        ) : notifications.length === 0 ? (
          <EmptyState text="No notifications 🔔" />
        ) : (
          <div className="space-y-6">

            {/* Today */}
            {grouped.Today.length > 0 && (
              <div>
                <p className="text-xs text-gray-400 mb-2">Today</p>

                <div className="space-y-3">
                  {grouped.Today.map((item) => (
                    <Card
                      key={item.id}
                      onClick={() => markAsRead(item.id)}
                      className={`p-4 flex justify-between items-center transition
                        ${
                          item.read
                            ? "bg-gray-100 dark:bg-gray-800"
                            : "bg-indigo-50 dark:bg-indigo-900/30 border border-indigo-200 dark:border-indigo-700"
                        }
                      `}
                    >
                      <div>
                        <p className="text-sm">{item.text}</p>
                        <p className="text-xs text-gray-500 mt-1">
                          {item.time}
                        </p>
                      </div>

                      {!item.read && (
                        <span className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse"></span>
                      )}
                    </Card>
                  ))}
                </div>
              </div>
            )}

            {/* Earlier */}
            {grouped.Earlier.length > 0 && (
              <div>
                <p className="text-xs text-gray-400 mb-2">Earlier</p>

                <div className="space-y-3">
                  {grouped.Earlier.map((item) => (
                    <Card
                      key={item.id}
                      onClick={() => markAsRead(item.id)}
                      className={`p-4 flex justify-between items-center transition
                        ${
                          item.read
                            ? "bg-gray-100 dark:bg-gray-800"
                            : "bg-indigo-50 dark:bg-indigo-900/30 border border-indigo-200 dark:border-indigo-700"
                        }
                      `}
                    >
                      <div>
                        <p className="text-sm">{item.text}</p>
                        <p className="text-xs text-gray-500 mt-1">
                          {item.time}
                        </p>
                      </div>

                      {!item.read && (
                        <span className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse"></span>
                      )}
                    </Card>
                  ))}
                </div>
              </div>
            )}

          </div>
        )}

      </div>
    </MainLayout>
  );
}