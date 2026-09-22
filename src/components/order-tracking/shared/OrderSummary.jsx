"use client";

import { Headphones } from "lucide-react";

/**
 * Reusable product / order summary card.
 *
 * @param {{ product: object, orderId: string, orderDate: string }} props
 */
export default function OrderSummary({ product, orderId, orderDate }) {
  return (
    <section className="px-4 pb-2">
      <h2 className="text-[13px] font-semibold text-gray-900 uppercase tracking-wide mb-3">
        Order Summary
      </h2>

      <div className="flex gap-3.5 rounded-2xl border border-gray-100 bg-white p-3.5 shadow-sm">
        {/* Product image fallback */}
        <div
          className="shrink-0 w-[72px] h-[72px] rounded-xl bg-gradient-to-br from-gray-100 to-gray-50
                      flex items-center justify-center"
        >
          <Headphones size={30} className="text-gray-400" strokeWidth={1.5} />
        </div>

        {/* Details */}
        <div className="flex flex-col justify-center min-w-0">
          <p className="text-[13px] font-semibold text-gray-900 leading-snug truncate">
            {product.name}
          </p>
          <p className="text-[11px] text-gray-400 mt-0.5">
            {product.variant} · Qty {product.quantity}
          </p>
          <p className="text-[14px] font-bold text-gray-900 mt-1.5">
            ${product.price.toFixed(2)}
          </p>
        </div>
      </div>

      {/* Order metadata */}
      <div className="flex justify-between mt-3 px-1">
        <div>
          <p className="text-[10px] text-gray-400 uppercase tracking-wide font-medium">
            Order ID
          </p>
          <p className="text-[12px] text-gray-700 font-medium mt-0.5">
            {orderId}
          </p>
        </div>
        <div className="text-right">
          <p className="text-[10px] text-gray-400 uppercase tracking-wide font-medium">
            Order Date
          </p>
          <p className="text-[12px] text-gray-700 font-medium mt-0.5">
            {orderDate}
          </p>
        </div>
      </div>
    </section>
  );
}
