"use client";

import MainLayout from "@/layout/MainLayout";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Input from "../components/ui/Input";
import LoadingState from "../components/ui/LoadingState";
import ErrorState from "../components/ui/ErrorState";
import EmptyState from "../components/ui/EmptyState";
import Card from "../components/ui/Card";
import Badge from "../components/ui/Badge";
import Button from "../components/ui/Button";
import Modal from "../components/ui/Modal";

const defaultOrders = [
  {
    id: "ORD123",
    customer: "Rahul Sharma",
    status: "In Progress",
    priority: "High",
    date: "2026-04-12",
  },
  {
    id: "ORD124",
    customer: "Amit Verma",
    status: "Completed",
    priority: "Low",
    date: "2026-04-10",
  },
];

export default function OrdersPage() {
  const router = useRouter();

  const [orderList, setOrderList] = useState<any[]>([]);
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("All");
  const [priority, setPriority] = useState("All");
  const [date, setDate] = useState("");
  const [sort, setSort] = useState("latest");

  const [deleteId, setDeleteId] = useState<string | null>(null);

  const [loading, setLoading] = useState(true);
  const error = false;

  useEffect(() => {
    const saved = localStorage.getItem("orders");

    if (saved) {
      setOrderList(JSON.parse(saved));
    } else {
      setOrderList(defaultOrders);
      localStorage.setItem("orders", JSON.stringify(defaultOrders));
    }

    setTimeout(() => setLoading(false), 500);
  }, []);

  const handleDelete = () => {
    if (!deleteId) return;

    const updated = orderList.filter((o) => o.id !== deleteId);
    setOrderList(updated);
    localStorage.setItem("orders", JSON.stringify(updated));

    setDeleteId(null);
  };

  const filtered = orderList
    .filter((order) => {
      return (
        order.customer.toLowerCase().includes(search.toLowerCase()) &&
        (status === "All" || order.status === status) &&
        (priority === "All" || order.priority === priority) &&
        (date === "" || order.date === date)
      );
    })
    .sort((a, b) => {
      if (sort === "latest") {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      } else {
        return new Date(a.date).getTime() - new Date(b.date).getTime();
      }
    });

  return (
    <MainLayout>
      <div className="space-y-6">

        {/* Top Bar */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">

          <h2 className="text-2xl font-semibold whitespace-nowrap">
            Orders
          </h2>

          <div className="flex flex-wrap gap-3 w-full md:w-auto">

            <Input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search..."
              className="w-full sm:w-48 md:w-56"
            />

            <select
              className="px-3 py-2 rounded-lg bg-gray-100 dark:bg-gray-800"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            >
              <option>All</option>
              <option>In Progress</option>
              <option>Completed</option>
            </select>

            <select
              className="px-3 py-2 rounded-lg bg-gray-100 dark:bg-gray-800"
              value={priority}
              onChange={(e) => setPriority(e.target.value)}
            >
              <option>All</option>
              <option>High</option>
              <option>Low</option>
            </select>

            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="px-3 py-2 rounded-lg bg-gray-100 dark:bg-gray-800"
            />

            {/* 🔥 Sorting */}
            <select
              className="px-3 py-2 rounded-lg bg-gray-100 dark:bg-gray-800"
              value={sort}
              onChange={(e) => setSort(e.target.value)}
            >
              <option value="latest">Latest</option>
              <option value="oldest">Oldest</option>
            </select>

            {(search || status !== "All" || priority !== "All" || date) && (
              <Button
                variant="secondary"
                onClick={() => {
                  setSearch("");
                  setStatus("All");
                  setPriority("All");
                  setDate("");
                }}
              >
                Reset
              </Button>
            )}
          </div>
        </div>

        {/* Content */}
        {loading ? (
          <LoadingState />
        ) : error ? (
          <ErrorState />
        ) : filtered.length === 0 ? (
          <EmptyState text="No orders found 📦" />
        ) : (
          <>
            {/* MOBILE */}
            <div className="md:hidden space-y-3">
              {filtered.map((order) => (
                <Card
                  key={order.id}
                  className="p-4 cursor-pointer"
                  onClick={() => router.push(`/orders/${order.id}`)}
                >
                  <div className="flex justify-between items-center mb-2">
                    <p className="font-semibold">#{order.id}</p>
                    <Badge>{order.status}</Badge>
                  </div>

                  <p className="text-sm text-gray-500">
                    {order.customer}
                  </p>

                  <div className="flex justify-between items-center mt-3">
                    <Badge
                      type={
                        order.priority === "High"
                          ? "danger"
                          : "success"
                      }
                    >
                      {order.priority}
                    </Badge>

                    <span className="text-xs text-gray-400">
                      {order.date}
                    </span>
                  </div>

                  <div className="mt-3 flex gap-2">
                    <Button
                      variant="secondary"
                      onClick={() =>
                       router.push(`/order-detail?id=${order.id}`)
                      }
                    >
                      View
                    </Button>

                    <Button
                      variant="danger"
                      onClick={() => setDeleteId(order.id)}
                    >
                      Delete
                    </Button>
                  </div>
                </Card>
              ))}
            </div>

            {/* DESKTOP */}
            <div className="hidden md:block">
              <Card className="overflow-hidden p-0">
                <div className="overflow-x-auto">
                  <table className="w-full text-left">
                    <thead className="bg-gray-100 dark:bg-gray-700 text-sm">
                      <tr>
                        <th className="p-4">Order</th>
                        <th className="p-4">Customer</th>
                        <th className="p-4">Status</th>
                        <th className="p-4">Priority</th>
                        <th className="p-4">Date</th>
                        <th className="p-4 text-right">Actions</th>
                      </tr>
                    </thead>

                    <tbody>
                      {filtered.map((order) => (
                        <tr
                          key={order.id}
                          onClick={() =>
    router.push(`/order-detail?id=${order.id}`)
  }
                          className="border-t hover:bg-gray-50 dark:hover:bg-gray-800 cursor-pointer group"
                        >
                          <td className="p-4 font-medium">
                            #{order.id}
                          </td>
                          <td className="p-4">{order.customer}</td>
                          <td className="p-4">
                            <Badge>{order.status}</Badge>
                          </td>
                          <td className="p-4">
                            <Badge
                              type={
                                order.priority === "High"
                                  ? "danger"
                                  : "success"
                              }
                            >
                              {order.priority}
                            </Badge>
                          </td>
                          <td className="p-4 text-gray-500">
                            {order.date}
                          </td>

                          <td
                            className="p-4 text-right opacity-0 group-hover:opacity-100"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <div className="flex gap-2 justify-end">
                              <Button
                                variant="secondary"
                               onClick={() =>
    router.push(`/order-detail?id=${order.id}`)
  }
                              >
                                View
                              </Button>

                              <Button
                                variant="danger"
                                onClick={() => setDeleteId(order.id)}
                              >
                                Delete
                              </Button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </Card>
            </div>
          </>
        )}

        {/* 🔥 MODAL */}
        <Modal
          open={!!deleteId}
          onClose={() => setDeleteId(null)}
          onConfirm={handleDelete}
          title="Delete Order"
          description="Are you sure you want to delete this order?"
        />

      </div>
    </MainLayout>
  );
}