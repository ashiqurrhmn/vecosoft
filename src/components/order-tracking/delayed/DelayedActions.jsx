"use client";

import { useState } from "react";
import { RefreshCw, BellRing, CheckCircle2 } from "lucide-react";

/**
 * Delayed-specific contextual actions.
 * These appear only for delayed orders and let the user take next steps.
 *
 * @param {object} props
 */
export default function DelayedActions() {
  const [notifyEnabled, setNotifyEnabled] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  const handleRefresh = () => {
    setRefreshing(true);
    setTimeout(() => setRefreshing(false), 1500);
  };

  const handleNotify = () => {
    setNotifyEnabled((prev) => !prev);
  };

  return (
    <section className="px-4 pb-2">
      <div className="flex gap-2.5">
        {/* Refresh tracking */}
        <button
          onClick={handleRefresh}
          disabled={refreshing}
          className="flex-1 flex items-center justify-center gap-2 py-3 rounded-2xl
                     bg-gray-900 text-white text-[13px] font-semibold
                     hover:bg-gray-800 active:scale-[0.98]
                     disabled:opacity-60
                     transition-all duration-150 shadow-sm"
        >
          <RefreshCw
            size={15}
            className={refreshing ? "animate-spin" : ""}
          />
          {refreshing ? "Refreshing…" : "Refresh Status"}
        </button>

        {/* Notify me */}
        <button
          onClick={handleNotify}
          className={`flex items-center justify-center gap-2 px-4 py-3 rounded-2xl
                      text-[13px] font-semibold
                      border transition-all duration-150 shadow-sm
                      active:scale-[0.98]
                      ${
                        notifyEnabled
                          ? "bg-emerald-50 border-emerald-200 text-emerald-700"
                          : "bg-white border-gray-200 text-gray-700 hover:bg-gray-50"
                      }`}
        >
          {notifyEnabled ? (
            <CheckCircle2 size={15} />
          ) : (
            <BellRing size={15} />
          )}
          {notifyEnabled ? "Notified" : "Notify Me"}
        </button>
      </div>
    </section>
  );
}
