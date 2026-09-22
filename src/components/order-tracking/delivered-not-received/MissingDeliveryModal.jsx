"use client";

import { useEffect } from "react";
import {
  X,
  ShieldAlert,
  Search,
  Clock,
  MessageSquareText,
  CheckCircle2,
} from "lucide-react";

/**
 * Bottom-sheet modal for reporting a missing delivery.
 * Shows what happens after reporting and provides support options.
 *
 * @param {{ open: boolean, onClose: () => void, onConfirm: () => void, order: object }} props
 */
export default function MissingDeliveryModal({
  open,
  onClose,
  onConfirm,
  order,
}) {
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

  const steps = [
    {
      icon: Search,
      title: "Investigation started",
      desc: "We'll contact the carrier to verify the delivery details.",
    },
    {
      icon: Clock,
      title: "Resolution within 48 hours",
      desc: "Most cases are resolved within 1–2 business days.",
    },
    {
      icon: MessageSquareText,
      title: "We'll keep you updated",
      desc: "You'll receive email updates at every stage of the investigation.",
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
                    shadow-2xl animate-slide-up max-h-[90vh] overflow-y-auto"
      >
        {/* Drag indicator */}
        <div className="flex justify-center pt-3 pb-1">
          <div className="w-10 h-1 rounded-full bg-gray-200" />
        </div>

        {/* Header */}
        <div className="flex items-center justify-between px-5 pb-2 pt-1">
          <h2 className="text-[15px] font-semibold text-gray-900">
            Report Missing Delivery
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

        {/* Shield icon + intro */}
        <div className="flex flex-col items-center px-5 pt-2 pb-4">
          <div className="w-14 h-14 rounded-2xl bg-rose-50 border border-rose-100 flex items-center justify-center mb-3">
            <ShieldAlert size={26} className="text-rose-500" strokeWidth={1.8} />
          </div>
          <p className="text-[13px] text-gray-600 text-center leading-relaxed max-w-[280px]">
            By reporting this issue, our team will immediately begin
            investigating your missing package for order{" "}
            <span className="font-semibold text-gray-900">
              {order.orderId}
            </span>
            .
          </p>
        </div>

        {/* What happens next */}
        <div className="px-5 pb-4">
          <h3 className="text-[12px] font-semibold text-gray-900 uppercase tracking-wide mb-3">
            What happens next
          </h3>

          <div className="space-y-3">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-gray-50 border border-gray-100 flex items-center justify-center shrink-0 mt-0.5">
                    <Icon size={15} className="text-gray-500" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[13px] font-medium text-gray-800">
                      {step.title}
                    </p>
                    <p className="text-[11px] text-gray-500 mt-0.5 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Actions */}
        <div className="px-5 pb-6 pt-2 space-y-2.5">
          <button
            onClick={onConfirm}
            className="w-full flex items-center justify-center gap-2 py-3.5 rounded-2xl
                       bg-rose-600 text-white text-[13px] font-semibold
                       hover:bg-rose-700 active:scale-[0.98]
                       transition-all duration-150 shadow-sm"
          >
            <CheckCircle2 size={16} />
            Confirm & Report Issue
          </button>

          <button
            onClick={onClose}
            className="w-full flex items-center justify-center py-3 rounded-2xl
                       bg-gray-100 text-gray-600 text-[13px] font-medium
                       hover:bg-gray-200 active:scale-[0.98]
                       transition-all duration-150"
          >
            Cancel
          </button>
        </div>
      </div>
    </>
  );
}
