"use client";

import { useState } from "react";
import DelayedStatusCard from "./DelayedStatusCard";
import DelayedActions from "./DelayedActions";
import DeliveryTimeline from "../shared/DeliveryTimeline";
import OrderSummary from "../shared/OrderSummary";
import SupportActions from "../shared/SupportActions";

/**
 * Top-level view for the "delayed" order state.
 * Composes shared components with delayed-specific pieces.
 *
 * @param {{ order: object }} props
 */
export default function DelayedOrderView({ order }) {
  const [issueReported, setIssueReported] = useState(false);

  const handleReportIssue = () => {
    setIssueReported(true);
    setTimeout(() => setIssueReported(false), 3000);
  };

  return (
    <div className="flex flex-col gap-2 pb-8">
      {/* 1 — Delayed-specific status card */}
      <DelayedStatusCard delivery={order.delivery} />

      {/* 2 — Delayed-specific actions */}
      <DelayedActions />

      {/* 3 — Shared timeline */}
      <DeliveryTimeline stages={order.timeline} />

      {/* 4 — Shared order summary */}
      <OrderSummary
        product={order.product}
        orderId={order.orderId}
        orderDate={order.orderDate}
      />

      {/* 5 — Shared support actions */}
      <SupportActions order={order} onReportIssue={handleReportIssue} />

      {/* Issue reported toast */}
      {issueReported && (
        <div
          className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50
                      bg-emerald-600 text-white text-[13px] font-medium
                      px-5 py-2.5 rounded-full shadow-lg
                      animate-fade-in-up"
        >
          Issue reported — we'll follow up shortly
        </div>
      )}
    </div>
  );
}
