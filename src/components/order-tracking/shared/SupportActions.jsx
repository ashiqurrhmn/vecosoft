"use client";

import { useState } from "react";
import { MessageSquareText, AlertCircle, FileText } from "lucide-react";
import OrderDetailsModal from "./OrderDetailsModal";

/**
 * Reusable support actions row.
 * Each action triggers lightweight front-end-only behaviour.
 *
 * @param {{ order: object, onReportIssue?: () => void }} props
 */
export default function SupportActions({ order, onReportIssue }) {
  const [detailsOpen, setDetailsOpen] = useState(false);
  const [contactToast, setContactToast] = useState(false);

  const handleContact = () => {
    setContactToast(true);
    setTimeout(() => setContactToast(false), 2500);
  };

  const actions = [
    {
      id: "contact",
      label: "Contact Support",
      icon: MessageSquareText,
      color: "text-blue-600 bg-blue-50",
      onClick: handleContact,
    },
    {
      id: "report",
      label: "Report Issue",
      icon: AlertCircle,
      color: "text-rose-600 bg-rose-50",
      onClick: onReportIssue,
    },
    {
      id: "details",
      label: "Order Details",
      icon: FileText,
      color: "text-violet-600 bg-violet-50",
      onClick: () => setDetailsOpen(true),
    },
  ];

  return (
    <>
      <section className="px-4 pt-4 pb-6">
        <h2 className="text-[13px] font-semibold text-gray-900 uppercase tracking-wide mb-3">
          Need Help?
        </h2>

        <div className="grid grid-cols-3 gap-2.5">
          {actions.map((a) => {
            const Icon = a.icon;
            return (
              <button
                key={a.id}
                onClick={a.onClick}
                className={`flex flex-col items-center gap-1.5 py-3.5 rounded-2xl
                           border border-gray-100 bg-white shadow-sm
                           hover:shadow-md active:scale-[0.97]
                           transition-all duration-150`}
              >
                <div
                  className={`w-9 h-9 rounded-xl flex items-center justify-center ${a.color}`}
                >
                  <Icon size={18} strokeWidth={2} />
                </div>
                <span className="text-[11px] font-medium text-gray-700 leading-tight text-center px-1">
                  {a.label}
                </span>
              </button>
            );
          })}
        </div>
      </section>

      {/* Contact-support toast */}
      {contactToast && (
        <div
          className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50
                      bg-gray-900 text-white text-[13px] font-medium
                      px-5 py-2.5 rounded-full shadow-lg
                      animate-fade-in-up"
        >
          Connecting you to support…
        </div>
      )}

      {/* Order details modal */}
      <OrderDetailsModal
        open={detailsOpen}
        onClose={() => setDetailsOpen(false)}
        order={order}
      />
    </>
  );
}
