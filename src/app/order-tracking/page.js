"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { Suspense } from "react";
import { getOrderByState } from "@/data/orderTrackingData";
import OrderHeader from "@/components/order-tracking/shared/OrderHeader";
import DelayedOrderView from "@/components/order-tracking/delayed/DelayedOrderView";
import DeliveredNotReceivedView from "@/components/order-tracking/delivered-not-received/DeliveredNotReceivedView";

const STATES = [
  { key: "delayed", label: "Delayed Order" },
  { key: "delivered-not-received", label: "Delivered but Not Received" },
];

/**
 * Inner component that reads searchParams.
 * Wrapped in Suspense by the page to avoid hydration issues.
 */
function OrderTrackingContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const state = searchParams.get("state") || "delayed";
  const order = getOrderByState(state);

  const handleBack = () => {
    window.history.back();
  };

  const switchState = (key) => {
    router.push(`/order-tracking?state=${key}`);
  };

  /** Render the correct view based on order state. */
  const renderView = () => {
    switch (order.state) {
      case "delayed":
        return <DelayedOrderView order={order} />;

      case "delivered-not-received":
        return <DeliveredNotReceivedView order={order} />;

      // Future state:
      // case "tracking-unavailable":
      //   return <TrackingUnavailableView order={order} />;

      default:
        return (
          <div className="flex flex-col items-center justify-center py-20 px-6 text-center">
            <p className="text-gray-400 text-sm">
              Unknown order state: <strong>{order.state}</strong>
            </p>
          </div>
        );
    }
  };

  return (
    <>
      <OrderHeader orderId={order.orderId} onBack={handleBack} />

      {/* State switcher */}
      <div className="flex gap-2 px-4 py-3 overflow-x-auto">
        {STATES.map((s) => (
          <button
            key={s.key}
            onClick={() => switchState(s.key)}
            className={`shrink-0 px-3.5 py-2 rounded-xl text-[12px] font-semibold
                        transition-all duration-150 active:scale-[0.97]
                        ${
                          state === s.key
                            ? "bg-gray-900 text-white shadow-sm"
                            : "bg-white text-gray-500 border border-gray-200 hover:bg-gray-50"
                        }`}
          >
            {s.label}
          </button>
        ))}
      </div>

      {renderView()}
    </>
  );
}

/**
 * Order Tracking page.
 *
 * Supports states via query param: ?state=delayed | ?state=delivered-not-received
 * Defaults to "delayed" when no param is provided.
 */
export default function OrderTrackingPage() {
  return (
    <main className="min-h-dvh bg-gray-50 max-w-md mx-auto">
      <Suspense
        fallback={
          <div className="flex items-center justify-center py-20">
            <div className="w-6 h-6 border-2 border-gray-300 border-t-gray-600 rounded-full animate-spin" />
          </div>
        }
      >
        <OrderTrackingContent />
      </Suspense>
    </main>
  );
}
