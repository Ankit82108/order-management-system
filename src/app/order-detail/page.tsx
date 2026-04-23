"use client";

import { Suspense } from "react";
import OrderDetailContent from "./OrderDetailContent";

export default function Page() {
  return (
    <Suspense fallback={<div className="p-6">Loading...</div>}>
      <OrderDetailContent />
    </Suspense>
  );
}