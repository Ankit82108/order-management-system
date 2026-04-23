"use client";

import { useEffect, useState } from "react";
import MainLayout from "@/layout/MainLayout";
import LoadingState from "@/app/components/ui/LoadingState";
import ErrorState from "@/app/components/ui/ErrorState";
import Card from "@/app/components/ui/Card";
import Badge from "@/app/components/ui/Badge";
import EmptyState from "@/app/components/ui/EmptyState";
import { useRouter, useSearchParams } from "next/navigation";

export default function OrderDetailContent() {
  const router = useRouter();
  const params = useSearchParams();
  const id = params.get("id");

  const [loading, setLoading] = useState(true);
  const [order, setOrder] = useState<any>(null);
  const error = false;
  const hasNotes = true;

  useEffect(() => {
    const saved = localStorage.getItem("orders");

    if (saved && id) {
      const orders = JSON.parse(saved);
      const found = orders.find((o: any) => o.id === id);
      setOrder(found);
    }

    setTimeout(() => setLoading(false), 500);
  }, [id]);

  if (loading) {
    return (
      <MainLayout>
        <LoadingState />
      </MainLayout>
    );
  }

  if (error) {
    return (
      <MainLayout>
        <ErrorState />
      </MainLayout>
    );
  }

  if (!order) {
    return (
      <MainLayout>
        <EmptyState text="Order not found 🚫" />
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <div className="space-y-6">

        {/* Header */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => router.push("/orders")}
            className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:scale-105 transition active:scale-95 cursor-pointer"
          >
            ←
          </button>

          <h2 className="text-2xl font-semibold">
            Order Details
          </h2>
        </div>

        {/* Top Summary */}
        <Card className="flex flex-col md:flex-row md:justify-between gap-4">
          <div>
            <h2 className="text-2xl font-semibold">
              #{order.id}
            </h2>
            <p className="text-gray-500 text-sm">
              Placed on {order.date}
            </p>
          </div>

          <div className="flex gap-2 flex-wrap items-center">
            <Badge>{order.status}</Badge>
            <Badge
              type={order.priority === "High" ? "danger" : "success"}
            >
              {order.priority}
            </Badge>
          </div>
        </Card>

        {/* Timeline */}
        <Card>
          <h3 className="text-lg font-semibold mb-6">
            Order Progress
          </h3>

          {/* MOBILE */}
          <div className="md:hidden space-y-4">
            {["Created", "Processing", "Shipped", "Delivered"].map(
              (step, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div
                    className={`w-6 h-6 flex items-center justify-center rounded-full text-white text-xs
                      ${
                        index <= 1
                          ? "bg-gradient-to-r from-indigo-500 to-purple-500"
                          : "bg-gray-300 dark:bg-gray-600"
                      }
                    `}
                  >
                    {index + 1}
                  </div>

                  <div>
                    <p className="text-sm font-medium">{step}</p>
                    <p className="text-xs text-gray-500">
                      Step {index + 1}
                    </p>
                  </div>
                </div>
              )
            )}
          </div>

          {/* DESKTOP */}
          <div className="hidden md:block overflow-x-auto">
            <div className="flex items-center justify-between relative min-w-[500px]">
              {["Created", "Processing", "Shipped", "Delivered"].map(
                (step, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center flex-1 relative"
                  >
                    {index !== 3 && (
                      <div className="absolute top-5 left-1/2 w-full h-[2px] bg-gray-300 dark:bg-gray-600 -z-10"></div>
                    )}

                    <div
                      className={`w-10 h-10 flex items-center justify-center rounded-full text-white
                        ${
                          index <= 1
                            ? "bg-gradient-to-r from-indigo-500 to-purple-500"
                            : "bg-gray-300 dark:bg-gray-600"
                        }
                      `}
                    >
                      {index + 1}
                    </div>

                    <p className="text-xs mt-2 text-gray-500">
                      {step}
                    </p>
                  </div>
                )
              )}
            </div>
          </div>

          {/* Progress */}
          <div className="mt-6">
            <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full">
              <div className="h-2 w-1/2 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"></div>
            </div>
            <p className="text-xs text-gray-500 mt-1">
              50% completed
            </p>
          </div>
        </Card>

        {/* Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <Card>
            <h3 className="text-lg font-semibold mb-6">
              Customer Details
            </h3>

            <div className="space-y-2 text-sm">
              <p><span className="text-gray-500">Name:</span> {order.customer}</p>
              <p><span className="text-gray-500">Email:</span> example@mail.com</p>
              <p><span className="text-gray-500">Phone:</span> +91 9876543210</p>
              <p className="text-gray-500 mt-2">Noida, India</p>
            </div>
          </Card>

          <Card>
            <h3 className="text-lg font-semibold mb-6">
              Assigned To
            </h3>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-indigo-500 flex items-center justify-center text-white">
                JD
              </div>

              <div>
                <p className="font-medium">John Doe</p>
                <p className="text-sm text-gray-500">
                  Operations Manager
                </p>
              </div>
            </div>
          </Card>

        </div>

        {/* Notes */}
        <Card>
          <h3 className="text-lg font-semibold mb-6">Notes</h3>

          {hasNotes ? (
            <div className="space-y-3">
              <div className="p-3 rounded-lg bg-gray-100 dark:bg-gray-800">
                <p className="text-sm">Order is being prepared.</p>
              </div>

              <div className="p-3 rounded-lg bg-gray-100 dark:bg-gray-800">
                <p className="text-sm">Shipment scheduled for tomorrow.</p>
              </div>
            </div>
          ) : (
            <EmptyState text="No notes available 📝" />
          )}
        </Card>

      </div>
    </MainLayout>
  );
}