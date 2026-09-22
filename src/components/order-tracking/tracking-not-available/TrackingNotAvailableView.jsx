"use client";

import { useState } from "react";
import TrackingPendingCard from "./TrackingPendingCard";
import TrackingHelpCard from "./TrackingHelpCard";
import DeliveryTimeline from "../shared/DeliveryTimeline";
import OrderSummary from "../shared/OrderSummary";
import SupportActions from "../shared/SupportActions";

/**
 * Top-level view for the "tracking-not-available" order state.
 * Composes shared components with tracking-specific pieces.
 *
 * @param {{ order: object }} props
 */
export default function TrackingNotAvailableView({ order }) {
  const [issueReported, setIssueReported] = useState(false);

  const handleReportIssue = () => {
    setIssueReported(true);
    setTimeout(() => setIssueReported(false), 3000);
  };

  return (
    <div className="flex flex-col gap-2 pb-8">
      {/* 1 — Tracking pending status card */}
      <TrackingPendingCard delivery={order.delivery} />

      {/* 2 — Shared timeline (preparation stages) */}
      <DeliveryTimeline stages={order.timeline} />

      {/* 3 — Shared order summary */}
      <OrderSummary
        product={order.product}
        orderId={order.orderId}
        orderDate={order.orderDate}
      />

      {/* 4 — Help & expectations card */}
      <TrackingHelpCard />

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
