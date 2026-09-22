"use client";

import { Clock, Info, Headset } from "lucide-react";

/**
 * Helpful info card explaining when tracking will be available
 * and what the customer should expect.
 */
export default function TrackingHelpCard() {
  const tips = [
    {
      icon: Clock,
      text: "Tracking usually appears within 24–48 hours after your order is placed.",
    },
    {
      icon: Info,
      text: "You'll receive an email notification as soon as tracking details are available.",
    },
    {
      icon: Headset,
      text: "If tracking hasn't appeared after 48 hours, please contact our support team.",
    },
  ];

  return (
    <section className="px-4 pb-2">
      <h2 className="text-[13px] font-semibold text-gray-900 uppercase tracking-wide mb-3">
        What to expect
      </h2>

      <div className="rounded-2xl border border-gray-100 bg-white shadow-sm overflow-hidden divide-y divide-gray-50">
        {tips.map((tip, i) => {
          const Icon = tip.icon;
          return (
            <div key={i} className="flex items-start gap-3 px-3.5 py-3">
              <div className="w-8 h-8 rounded-lg bg-gray-50 flex items-center justify-center shrink-0 mt-0.5">
                <Icon size={15} className="text-gray-400" strokeWidth={2} />
              </div>
              <p className="text-[12px] text-gray-600 leading-relaxed pt-1.5">
                {tip.text}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
