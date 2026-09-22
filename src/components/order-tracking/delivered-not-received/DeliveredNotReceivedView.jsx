"use client";

import { useState } from "react";
import MissingDeliveryCard from "./MissingDeliveryCard";
import MissingDeliveryModal from "./MissingDeliveryModal";
import DeliveryTimeline from "../shared/DeliveryTimeline";
import OrderSummary from "../shared/OrderSummary";
import SupportActions from "../shared/SupportActions";
import { PackageX, CheckCircle2 } from "lucide-react";

/**
 * Top-level view for the "delivered-not-received" order state.
 * Composes shared components with delivered-not-received-specific pieces.
 *
 * @param {{ order: object }} props
 */
export default function DeliveredNotReceivedView({ order }) {
  const [reportModalOpen, setReportModalOpen] = useState(false);
  const [reported, setReported] = useState(false);
  const [issueReported, setIssueReported] = useState(false);

  const handleConfirmReport = () => {
    setReportModalOpen(false);
    setReported(true);
  };

  const handleReportIssue = () => {
    setIssueReported(true);
    setTimeout(() => setIssueReported(false), 3000);
  };

  return (
    <div className="flex flex-col gap-2 pb-8">
      {/* 1 — Missing delivery status card */}
      <MissingDeliveryCard
        delivery={order.delivery}
        orderId={order.orderId}
      />

      {/* 2 — Primary CTA: Report missing delivery */}
      <section className="px-4 pb-1">
        {!reported ? (
          <button
            onClick={() => setReportModalOpen(true)}
            className="w-full flex items-center justify-center gap-2 py-3.5 rounded-2xl
                       bg-rose-600 text-white text-[13px] font-semibold
                       hover:bg-rose-700 active:scale-[0.98]
                       transition-all duration-150 shadow-sm"
          >
            <PackageX size={16} />
            Report Missing Delivery
          </button>
        ) : (
          <div
            className="w-full flex items-center justify-center gap-2 py-3.5 rounded-2xl
                        bg-emerald-50 border border-emerald-200 text-emerald-700
                        text-[13px] font-semibold"
          >
            <CheckCircle2 size={16} />
            Issue reported — we're investigating
          </div>
        )}
      </section>

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

      {/* Report modal */}
      <MissingDeliveryModal
        open={reportModalOpen}
        onClose={() => setReportModalOpen(false)}
        onConfirm={handleConfirmReport}
        order={order}
      />

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
