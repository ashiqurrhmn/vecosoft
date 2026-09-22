"use client";

import { ArrowLeft, Package } from "lucide-react";

/**
 * Shared page header with back navigation and order ID.
 *
 * @param {{ orderId: string, onBack?: () => void }} props
 */
export default function OrderHeader({ orderId, onBack }) {
  return (
    <header className="sticky top-0 z-30 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="flex items-center justify-between px-4 py-3.5">
        {/* Back button */}
        <button
          onClick={onBack}
          aria-label="Go back"
          className="flex items-center justify-center w-9 h-9 -ml-1 rounded-xl
                     text-gray-600 hover:bg-gray-100 active:scale-95
                     transition-all duration-150"
        >
          <ArrowLeft size={20} strokeWidth={2} />
        </button>

        {/* Title */}
        <h1 className="text-[15px] font-semibold text-gray-900 tracking-tight">
          Order Tracking
        </h1>

        {/* Trailing icon / placeholder for symmetry */}
        <div className="flex items-center justify-center w-9 h-9 -mr-1 rounded-xl text-gray-400">
          <Package size={18} strokeWidth={2} />
        </div>
      </div>

      {/* Order ID bar */}
      <div className="px-4 pb-2.5 -mt-0.5">
        <p className="text-[11px] text-gray-400 font-medium tracking-wide text-center uppercase">
          {orderId}
        </p>
      </div>
    </header>
  );
}
