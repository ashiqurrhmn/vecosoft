# VecoSoft — Order Tracking UI

A mobile-first **Order Tracking** screen built as a frontend assessment.  
The application handles three real-world delivery situations through a single, consistent product experience.

🔗 **Live Demo:** [vecosoft.vercel.app](https://vecosoft.vercel.app)

## Supported States

| State | URL | Description |
|---|---|---|
| Delayed Order | `?state=delayed` | Delivery is running behind schedule |
| Delivered but Not Received | `?state=delivered-not-received` | Carrier says delivered, customer disagrees |
| Tracking Not Available | `?state=tracking-not-available` | Order confirmed, tracking info pending |

## Tech Stack

- **Next.js 16** (App Router)
- **React 19**
- **Tailwind CSS 4**
- **JavaScript / JSX** (no TypeScript)
- **lucide-react** for icons

## Getting Started

### Prerequisites

- **Node.js** ≥ 18
- **npm** ≥ 9

### Install & Run

```bash
# Clone the repository
git clone https://github.com/ashiqurrhmn/vecosoft.git
cd vecosoft

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) — the root page redirects to `/order-tracking`.

### Production Build

```bash
npm run build
npm start
```

## Project Structure

```
src/
├── app/
│   ├── layout.js                  # Root layout
│   ├── page.js                    # Redirects to /order-tracking
│   ├── globals.css                # Global styles & animations
│   └── order-tracking/
│       └── page.js                # State router (reads ?state= param)
│
├── components/order-tracking/
│   ├── shared/                    # Reusable across all states
│   │   ├── OrderHeader.jsx
│   │   ├── DeliveryTimeline.jsx
│   │   ├── OrderSummary.jsx
│   │   ├── SupportActions.jsx
│   │   └── OrderDetailsModal.jsx
│   │
│   ├── delayed/                   # Delayed order state
│   │   ├── DelayedOrderView.jsx
│   │   ├── DelayedStatusCard.jsx
│   │   └── DelayedActions.jsx
│   │
│   ├── delivered-not-received/    # Delivered but not received state
│   │   ├── DeliveredNotReceivedView.jsx
│   │   ├── MissingDeliveryCard.jsx
│   │   └── MissingDeliveryModal.jsx
│   │
│   └── tracking-not-available/    # Tracking not available state
│       ├── TrackingNotAvailableView.jsx
│       ├── TrackingPendingCard.jsx
│       └── TrackingHelpCard.jsx
│
└── data/
    └── orderTrackingData.js       # Mock data for all states
```

## Switching States

For easier understanding and review, **three toggle buttons** are displayed at the top of the order tracking screen:

- **Delayed Order**
- **Delivered but Not Received**
- **Tracking Not Available**

Clicking any button instantly switches the UI to that situation — the active button is highlighted. This allows reviewers to see how the same product experience adapts to each real-world scenario without manually editing the URL.

You can also navigate directly:

- [Delayed Order](https://vecosoft.vercel.app/order-tracking?state=delayed)
- [Delivered but Not Received](https://vecosoft.vercel.app/order-tracking?state=delivered-not-received)
- [Tracking Not Available](https://vecosoft.vercel.app/order-tracking?state=tracking-not-available)
