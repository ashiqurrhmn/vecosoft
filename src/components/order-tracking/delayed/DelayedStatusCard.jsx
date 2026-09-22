"use client";

import { AlertTriangle, Clock, CalendarClock } from "lucide-react";

/**
 * Prominent status card shown when an order is delayed.
 * Communicates what happened, original & updated ETA, and a helpful message.
 *
 * @param {{ delivery: object }} props
 */
export default function DelayedStatusCard({ delivery }) {
  return (
    <section className="px-4 pt-4 pb-1">
      <div
        className="relative overflow-hidden rounded-2xl border border-amber-200
                    bg-gradient-to-br from-amber-50 via-white to-orange-50
                    shadow-sm"
      >
        {/* Decorative top strip */}
        <div className="h-1.5 bg-gradient-to-r from-amber-400 via-orange-400 to-amber-500" />

        <div className="px-4 pt-4 pb-4">
          {/* Status badge + title */}
          <div className="flex items-start gap-3 mb-3">
            <div
              className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center
                          shrink-0 mt-0.5"
            >
              <AlertTriangle
                size={20}
                className="text-amber-600"
                strokeWidth={2.2}
              />
            </div>
            <div>
              <h2 className="text-[15px] font-bold text-amber-800 leading-snug">
                Your order is delayed
              </h2>
              <p className="text-[12px] text-amber-700/80 mt-0.5 leading-relaxed">
                We're sorry — your order is taking longer than expected.
              </p>
            </div>
          </div>

          {/* Reason */}
          <p className="text-[11px] text-gray-500 leading-relaxed mb-4 pl-[52px]">
            {delivery.delayReason}
          </p>

          {/* Delivery dates */}
          <div className="grid grid-cols-2 gap-2.5">
            {/* Original */}
            <div className="rounded-xl bg-white/70 border border-gray-100 px-3 py-2.5">
              <div className="flex items-center gap-1.5 mb-1">
                <Clock size={12} className="text-gray-400" />
                <span className="text-[10px] uppercase tracking-wider font-semibold text-gray-400">
                  Original
                </span>
              </div>
              <p className="text-[11px] text-gray-500 line-through leading-snug">
                {delivery.originalEstimate}
              </p>
            </div>

            {/* Updated */}
            <div className="rounded-xl bg-amber-50 border border-amber-200 px-3 py-2.5">
              <div className="flex items-center gap-1.5 mb-1">
                <CalendarClock size={12} className="text-amber-600" />
                <span className="text-[10px] uppercase tracking-wider font-semibold text-amber-600">
                  Updated
                </span>
              </div>
              <p className="text-[12px] text-amber-800 font-semibold leading-snug">
                {delivery.updatedEstimate}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
