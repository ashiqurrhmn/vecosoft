"use client";

import { orderTrackingData } from "@/data/orderTrackingData";
import OrderHeader from "@/components/order-tracking/shared/OrderHeader";
import DelayedOrderView from "@/components/order-tracking/delayed/DelayedOrderView";

/**
 * Order Tracking page.
 *
 * Reads the order state and renders the appropriate view.
 * Currently supports: "delayed".
 * Future: "delivered-not-received", "tracking-unavailable".
 */
export default function OrderTrackingPage() {
  const order = orderTrackingData;

  const handleBack = () => {
    // In a real app this would use router.back()
    window.history.back();
  };

  /** Render the correct view based on order state. */
  const renderView = () => {
    switch (order.state) {
      case "delayed":
        return <DelayedOrderView order={order} />;

      // Future states:
      // case "delivered-not-received":
      //   return <DeliveredNotReceivedView order={order} />;
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
    <main className="min-h-dvh bg-gray-50 max-w-md mx-auto">
      <OrderHeader orderId={order.orderId} onBack={handleBack} />
      {renderView()}
    </main>
  );
}
