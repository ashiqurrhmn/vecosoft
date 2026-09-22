/**
 * Mock order tracking data.
 *
 * `getOrderByState()` returns the appropriate dataset for a given state.
 * Supported states: "delayed" | "delivered-not-received" | "tracking-unavailable"
 */

const baseOrder = {
  orderId: "VCO-2026-78432",
  orderDate: "September 18, 2026",
  paymentMethod: "Visa •••• 4821",

  product: {
    name: "Sony WH-1000XM5 Wireless Headphones",
    variant: "Midnight Black",
    quantity: 1,
    price: 348.0,
    currency: "USD",
    image: "/product-headphones.jpg",
  },

  support: {
    phone: "+1 (800) 555-0199",
    email: "support@vecosoft.com",
    chatAvailable: true,
  },
};

/**
 * State-specific order configurations.
 */
const stateConfigs = {
  delayed: {
    state: "delayed",
    ...baseOrder,

    delivery: {
      originalEstimate: "September 21, 2026 — by 8:00 PM",
      updatedEstimate: "September 23, 2026 — by 6:00 PM",
      carrier: "FedEx",
      trackingNumber: "7489 2031 5578",
      shippingAddress: "42 Maple Drive, Apt 7B, Brooklyn, NY 11201",
      delayReason:
        "Due to high order volume, your package is experiencing a routing delay at the regional distribution center.",
    },

    timeline: [
      {
        id: "processing",
        label: "Processing",
        description: "Order confirmed & payment verified",
        date: "Sep 18, 10:24 AM",
        status: "completed",
      },
      {
        id: "shipped",
        label: "Shipped",
        description: "Package picked up by FedEx",
        date: "Sep 19, 3:15 PM",
        status: "completed",
      },
      {
        id: "out-for-delivery",
        label: "Out for Delivery",
        description: "Delayed at distribution center",
        date: "Expected Sep 23",
        status: "delayed",
      },
      {
        id: "delivered",
        label: "Delivered",
        description: "—",
        date: "",
        status: "upcoming",
      },
    ],
  },

  "delivered-not-received": {
    state: "delivered-not-received",
    ...baseOrder,

    delivery: {
      carrier: "FedEx",
      trackingNumber: "7489 2031 5578",
      shippingAddress: "42 Maple Drive, Apt 7B, Brooklyn, NY 11201",
      deliveredDate: "September 21, 2026",
      deliveredTime: "2:47 PM",
      signedBy: "Front Door",
    },

    timeline: [
      {
        id: "processing",
        label: "Processing",
        description: "Order confirmed & payment verified",
        date: "Sep 18, 10:24 AM",
        status: "completed",
      },
      {
        id: "shipped",
        label: "Shipped",
        description: "Package picked up by FedEx",
        date: "Sep 19, 3:15 PM",
        status: "completed",
      },
      {
        id: "out-for-delivery",
        label: "Out for Delivery",
        description: "Package out with local driver",
        date: "Sep 21, 8:30 AM",
        status: "completed",
      },
      {
        id: "delivered",
        label: "Delivered",
        description: "Marked delivered — customer disputes",
        date: "Sep 21, 2:47 PM",
        status: "disputed",
      },
    ],
  },

  "tracking-not-available": {
    state: "tracking-not-available",
    ...baseOrder,

    delivery: {
      estimatedDelivery: "September 25–27, 2026",
      carrier: "Pending assignment",
      trackingNumber: null,
      shippingAddress: "42 Maple Drive, Apt 7B, Brooklyn, NY 11201",
    },

    timeline: [
      {
        id: "order-placed",
        label: "Order Placed",
        description: "Order confirmed & payment verified",
        date: "Sep 18, 10:24 AM",
        status: "completed",
      },
      {
        id: "preparing",
        label: "Preparing Your Order",
        description: "Packing & getting ready for shipment",
        date: "",
        status: "current",
      },
      {
        id: "tracking-soon",
        label: "Tracking Available Soon",
        description: "Details appear once carrier receives the package",
        date: "",
        status: "upcoming",
      },
    ],
  },
};

/**
 * Returns mock order data for a given state.
 * Falls back to "delayed" if the state is not recognised.
 *
 * @param {string} state
 * @returns {object}
 */
export function getOrderByState(state) {
  return stateConfigs[state] || stateConfigs.delayed;
}

/** Default export kept for backwards-compatibility. */
export const orderTrackingData = stateConfigs.delayed;
