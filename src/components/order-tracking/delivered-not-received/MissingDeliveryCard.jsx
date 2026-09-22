"use client";

import {
  PackageX,
  Calendar,
  Clock,
  MapPin,
  User,
} from "lucide-react";

/**
 * Primary status card for the "delivered but not received" state.
 * Shows the conflict: system says delivered, customer says otherwise.
 *
 * @param {{ delivery: object, orderId: string }} props
 */
export default function MissingDeliveryCard({ delivery, orderId }) {
  return (
    <section className="px-4 pt-4 pb-1">
      <div
        className="relative overflow-hidden rounded-2xl border border-rose-200
                    bg-gradient-to-br from-rose-50 via-white to-pink-50
                    shadow-sm"
      >
        {/* Decorative top strip */}
        <div className="h-1.5 bg-gradient-to-r from-rose-400 via-pink-400 to-rose-500" />

        <div className="px-4 pt-4 pb-4">
          {/* Status badge + title */}
          <div className="flex items-start gap-3 mb-3">
            <div
              className="w-10 h-10 rounded-xl bg-rose-100 flex items-center justify-center
                          shrink-0 mt-0.5"
            >
              <PackageX
                size={20}
                className="text-rose-600"
                strokeWidth={2.2}
              />
            </div>
            <div>
              <h2 className="text-[15px] font-bold text-rose-800 leading-snug">
                Marked as delivered
              </h2>
              <p className="text-[12px] text-rose-700/80 mt-0.5 leading-relaxed">
                Our system shows this order was delivered, but you haven't
                received it?
              </p>
            </div>
          </div>

          {/* Explanation */}
          <p className="text-[11px] text-gray-500 leading-relaxed mb-4 pl-[52px]">
            We understand how frustrating this can be. Please report the issue
            below and our team will investigate right away.
          </p>

          {/* Delivery facts */}
          <div className="grid grid-cols-2 gap-2.5">
            <div className="rounded-xl bg-white/70 border border-gray-100 px-3 py-2.5">
              <div className="flex items-center gap-1.5 mb-1">
                <Calendar size={12} className="text-gray-400" />
                <span className="text-[10px] uppercase tracking-wider font-semibold text-gray-400">
                  Delivered On
                </span>
              </div>
              <p className="text-[12px] text-gray-800 font-semibold leading-snug">
                {delivery.deliveredDate}
              </p>
            </div>

            <div className="rounded-xl bg-white/70 border border-gray-100 px-3 py-2.5">
              <div className="flex items-center gap-1.5 mb-1">
                <Clock size={12} className="text-gray-400" />
                <span className="text-[10px] uppercase tracking-wider font-semibold text-gray-400">
                  Time
                </span>
              </div>
              <p className="text-[12px] text-gray-800 font-semibold leading-snug">
                {delivery.deliveredTime}
              </p>
            </div>

            <div className="rounded-xl bg-white/70 border border-gray-100 px-3 py-2.5">
              <div className="flex items-center gap-1.5 mb-1">
                <User size={12} className="text-gray-400" />
                <span className="text-[10px] uppercase tracking-wider font-semibold text-gray-400">
                  Signed By
                </span>
              </div>
              <p className="text-[12px] text-gray-800 font-semibold leading-snug">
                {delivery.signedBy}
              </p>
            </div>

            <div className="rounded-xl bg-white/70 border border-gray-100 px-3 py-2.5">
              <div className="flex items-center gap-1.5 mb-1">
                <MapPin size={12} className="text-gray-400" />
                <span className="text-[10px] uppercase tracking-wider font-semibold text-gray-400">
                  Carrier
                </span>
              </div>
              <p className="text-[12px] text-gray-800 font-semibold leading-snug">
                {delivery.carrier}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
