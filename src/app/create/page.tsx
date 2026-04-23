"use client";

import MainLayout from "@/layout/MainLayout";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import Card from "../components/ui/Card";
import Button from "../components/ui/Button";


export default function CreateOrder() {
  const [step, setStep] = useState(1);
  const [errors, setErrors] = useState<any>({});
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const [form, setForm] = useState({
    name: "",
    email: "",
    priority: "",
    status: "",
    date: "",
  });

  const next = () => setStep((s) => s + 1);
  const prev = () => setStep((s) => s - 1);

  const validateStep1 = () => {
    const newErrors: any = {};

    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.email.trim()) newErrors.email = "Email is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateStep2 = () => {
    const newErrors: any = {};

    if (!form.priority) newErrors.priority = "Priority required";
    if (!form.status) newErrors.status = "Status required";
    if (!form.date) newErrors.date = "Date required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

 const handleSubmit = () => {
  setLoading(true);

  setTimeout(() => {
    const newOrder = {
      id: "ORD" + Math.floor(Math.random() * 10000),
      customer: form.name,
      status: form.status,
      priority: form.priority,
      date: form.date,
    };

    // 🧠 get existing data
    const existing = localStorage.getItem("orders");
    const parsed = existing ? JSON.parse(existing) : [];

    // ➕ add new order
    const updated = [newOrder, ...parsed];

    // 💾 save
    localStorage.setItem("orders", JSON.stringify(updated));

    setLoading(false);
    toast.success("Order created successfully ");

    router.push("/orders");
  }, 800);
};

  return (
    <MainLayout>
      <div className="max-w-2xl mx-auto space-y-6">

        <h2 className="text-2xl font-semibold">Create Order</h2>

        {/* Step Indicator */}
        <div className="flex justify-between text-sm">
          {[1, 2, 3].map((s) => (
            <div
              key={s}
              className={`flex-1 text-center pb-2 border-b-2 transition ${
                step === s
                  ? "border-indigo-500 text-indigo-500"
                  : "border-gray-300 text-gray-400"
              }`}
            >
              Step {s}
            </div>
          ))}
        </div>

        {/* Form */}
        <Card>

          {/* STEP 1 */}
          {step === 1 && (
            <div className="space-y-4">
              <h3 className="font-medium">Customer Info</h3>

              <input
                placeholder="Customer Name"
               className={`w-full px-4 py-2 rounded-lg 
bg-gray-100 dark:bg-gray-900 
border 
${errors.name ? "border-red-500" : "border-gray-300 dark:border-gray-700"} 
text-black dark:text-white 
placeholder-gray-400 
focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent 
transition`}
                value={form.name}
                onChange={(e) =>
                  setForm({ ...form, name: e.target.value })
                }
              />
              {errors.name && (
                <p className="text-sm text-red-500">{errors.name}</p>
              )}

              <input
                placeholder="Email"
               className={`w-full px-4 py-2 rounded-lg 
bg-gray-100 dark:bg-gray-900 
border 
${errors.name ? "border-red-500" : "border-gray-300 dark:border-gray-700"} 
text-black dark:text-white 
placeholder-gray-400 
focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent 
transition`}
                value={form.email}
                onChange={(e) =>
                  setForm({ ...form, email: e.target.value })
                }
              />
              {errors.email && (
                <p className="text-sm text-red-500">{errors.email}</p>
              )}
            </div>
          )}

          {/* STEP 2 */}
          {step === 2 && (
            <div className="space-y-4">
              <h3 className="font-medium">Order Details</h3>

              <select
                className="w-full px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-800"
                value={form.priority}
                onChange={(e) =>
                  setForm({ ...form, priority: e.target.value })
                }
              >
                <option value="">Select Priority</option>
                <option>High</option>
                <option>Low</option>
              </select>
              {errors.priority && (
                <p className="text-sm text-red-500">{errors.priority}</p>
              )}

              <select
                className="w-full px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-800"
                value={form.status}
                onChange={(e) =>
                  setForm({ ...form, status: e.target.value })
                }
              >
                <option value="">Select Status</option>
                <option>Pending</option>
                <option>In Progress</option>
                <option>Completed</option>
              </select>
              {errors.status && (
                <p className="text-sm text-red-500">{errors.status}</p>
              )}

              <input
                type="date"
                className="w-full px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-800"
                value={form.date}
                onChange={(e) =>
                  setForm({ ...form, date: e.target.value })
                }
              />
              {errors.date && (
                <p className="text-sm text-red-500">{errors.date}</p>
              )}
            </div>
          )}

          {/* STEP 3 */}
          {step === 3 && (
            <div className="space-y-3 text-sm">
              <h3 className="font-medium">Review</h3>

              <p><b>Name:</b> {form.name}</p>
              <p><b>Email:</b> {form.email}</p>
              <p><b>Priority:</b> {form.priority}</p>
              <p><b>Status:</b> {form.status}</p>
              <p><b>Date:</b> {form.date}</p>
            </div>
          )}

        </Card>

        {/* Buttons */}
        <div className="flex justify-between items-center">

          {step > 1 && (
            <Button variant="secondary" onClick={prev}>
              Back
            </Button>
          )}

          {step < 3 ? (
            <Button
              onClick={() => {
                if (step === 1 && !validateStep1()) return;
                if (step === 2 && !validateStep2()) return;
                next();
              }}
              className="ml-auto"
            >
              Next
            </Button>
          ) : (
           <Button
  onClick={() => {
    if (!validateStep2()) return; // safety
    handleSubmit();
  }}
  className="ml-auto"
>
  {loading ? "Submitting..." : "Submit"}
</Button>
          )}

        </div>

      </div>
    </MainLayout>
  );
}