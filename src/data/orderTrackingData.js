/**
 * Mock order tracking data.
 *
 * `state` drives which view the page renders.
 * Possible future values: "delayed" | "delivered-not-received" | "tracking-unavailable"
 */

export const orderTrackingData = {
  state: "delayed",

  orderId: "VCO-2026-78432",
  orderDate: "September 18, 2026",
  paymentMethod: "Visa •••• 4821",

  product: {
    name: "Sony WH-1000XM5 Wireless Headphones",
    variant: "Midnight Black",
    quantity: 1,
    price: 348.0,
    currency: "USD",
    image: "/product-headphones.jpg", // placeholder path – we render a styled fallback
  },

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
      status: "completed", // "completed" | "current" | "upcoming" | "delayed"
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

  support: {
    phone: "+1 (800) 555-0199",
    email: "support@vecosoft.com",
    chatAvailable: true,
  },
};
