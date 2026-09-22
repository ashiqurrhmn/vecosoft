"use client";

import { X, CreditCard, MapPin, Truck, Calendar } from "lucide-react";
import { useEffect } from "react";

/**
 * Slide-up modal showing full order details.
 *
 * @param {{ open: boolean, onClose: () => void, order: object }} props
 */
export default function OrderDetailsModal({ open, onClose, order }) {
  // Lock body scroll when modal is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  if (!open) return null;

  const rows = [
    { icon: Calendar, label: "Order Date", value: order.orderDate },
    { icon: CreditCard, label: "Payment", value: order.paymentMethod },
    { icon: Truck, label: "Carrier", value: order.delivery.carrier },
    {
      icon: Truck,
      label: "Tracking #",
      value: order.delivery.trackingNumber,
    },
    {
      icon: MapPin,
      label: "Ship To",
      value: order.delivery.shippingAddress,
    },
  ];

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm animate-fade-in"
        onClick={onClose}
      />

      {/* Sheet */}
      <div
        className="fixed inset-x-0 bottom-0 z-50 bg-white rounded-t-3xl
                    shadow-2xl animate-slide-up max-h-[85vh] overflow-y-auto"
      >
        {/* Drag indicator */}
        <div className="flex justify-center pt-3 pb-1">
          <div className="w-10 h-1 rounded-full bg-gray-200" />
        </div>

        {/* Header */}
        <div className="flex items-center justify-between px-5 pb-3 pt-1">
          <h2 className="text-[15px] font-semibold text-gray-900">
            Order Details
          </h2>
          <button
            onClick={onClose}
            aria-label="Close"
            className="w-8 h-8 flex items-center justify-center rounded-full
                       bg-gray-100 text-gray-500 hover:bg-gray-200
                       active:scale-95 transition-all"
          >
            <X size={16} />
          </button>
        </div>

        {/* Order ID */}
        <div className="mx-5 mb-4 px-3.5 py-2.5 rounded-xl bg-gray-50 border border-gray-100">
          <p className="text-[10px] uppercase tracking-wider text-gray-400 font-medium">
            Order ID
          </p>
          <p className="text-[14px] font-bold text-gray-900 mt-0.5 font-mono tracking-wide">
            {order.orderId}
          </p>
        </div>

        {/* Detail rows */}
        <div className="px-5 pb-6 space-y-3.5">
          {rows.map((r, i) => {
            const Icon = r.icon;
            return (
              <div key={i} className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-gray-50 flex items-center justify-center shrink-0 mt-0.5">
                  <Icon size={15} className="text-gray-400" />
                </div>
                <div className="min-w-0">
                  <p className="text-[10px] uppercase tracking-wider text-gray-400 font-medium">
                    {r.label}
                  </p>
                  <p className="text-[13px] text-gray-800 font-medium mt-0.5 break-words">
                    {r.value}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
