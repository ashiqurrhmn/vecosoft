"use client";

import { Radar, CalendarDays } from "lucide-react";

/**
 * Primary status card for the "tracking not available yet" state.
 * Reassures the customer that nothing is broken — tracking will appear soon.
 *
 * @param {{ delivery: object }} props
 */
export default function TrackingPendingCard({ delivery }) {
  return (
    <section className="px-4 pt-4 pb-1">
      <div
        className="relative overflow-hidden rounded-2xl border border-blue-200
                    bg-gradient-to-br from-blue-50 via-white to-indigo-50
                    shadow-sm"
      >
        {/* Decorative top strip */}
        <div className="h-1.5 bg-gradient-to-r from-blue-400 via-indigo-400 to-blue-500" />

        <div className="px-4 pt-4 pb-4">
          {/* Status badge + title */}
          <div className="flex items-start gap-3 mb-3">
            <div
              className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center
                          shrink-0 mt-0.5"
            >
              <Radar
                size={20}
                className="text-blue-600 animate-pulse"
                strokeWidth={2.2}
              />
            </div>
            <div>
              <h2 className="text-[15px] font-bold text-blue-800 leading-snug">
                Tracking isn't available yet
              </h2>
              <p className="text-[12px] text-blue-700/80 mt-0.5 leading-relaxed">
                Your order is confirmed. Tracking details will appear once
                the package is handed over to the delivery carrier.
              </p>
            </div>
          </div>

          {/* Estimated delivery */}
          <div className="ml-[52px] rounded-xl bg-blue-50 border border-blue-200 px-3 py-2.5">
            <div className="flex items-center gap-1.5 mb-1">
              <CalendarDays size={12} className="text-blue-600" />
              <span className="text-[10px] uppercase tracking-wider font-semibold text-blue-600">
                Estimated Delivery
              </span>
            </div>
            <p className="text-[12px] text-blue-800 font-semibold leading-snug">
              {delivery.estimatedDelivery}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
