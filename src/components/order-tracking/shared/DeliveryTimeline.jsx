"use client";

import {
  PackageCheck,
  Truck,
  MapPin,
  CircleCheckBig,
  AlertTriangle,
} from "lucide-react";

/**
 * Icon map keyed by timeline stage id.
 */
const STAGE_ICONS = {
  processing: PackageCheck,
  shipped: Truck,
  "out-for-delivery": MapPin,
  delivered: CircleCheckBig,
};

/**
 * Visual classes for each status token.
 */
const STATUS_STYLES = {
  completed: {
    dot: "bg-emerald-500 ring-emerald-100",
    line: "bg-emerald-500",
    icon: "text-white",
    label: "text-gray-900 font-medium",
    desc: "text-gray-500",
  },
  current: {
    dot: "bg-blue-500 ring-blue-100 animate-pulse",
    line: "bg-gray-200",
    icon: "text-white",
    label: "text-gray-900 font-semibold",
    desc: "text-gray-600",
  },
  delayed: {
    dot: "bg-amber-500 ring-amber-100 animate-pulse",
    line: "bg-gray-200",
    icon: "text-white",
    label: "text-amber-700 font-semibold",
    desc: "text-amber-600",
  },
  upcoming: {
    dot: "bg-gray-200 ring-gray-100",
    line: "bg-gray-200",
    icon: "text-gray-400",
    label: "text-gray-400 font-medium",
    desc: "text-gray-300",
  },
};

/**
 * A single step in the delivery timeline.
 */
function TimelineStep({ stage, isLast }) {
  const styles = STATUS_STYLES[stage.status] || STATUS_STYLES.upcoming;
  const Icon = STAGE_ICONS[stage.id] || PackageCheck;

  return (
    <li className="relative flex gap-3.5">
      {/* Vertical connector + dot */}
      <div className="flex flex-col items-center">
        {/* Dot / icon circle */}
        <div
          className={`relative z-10 flex items-center justify-center w-9 h-9
                      rounded-full ring-4 ${styles.dot} shrink-0
                      transition-colors duration-300`}
        >
          <Icon size={16} strokeWidth={2.2} className={styles.icon} />
        </div>

        {/* Connector line */}
        {!isLast && (
          <div
            className={`w-0.5 grow min-h-[36px] mt-1 rounded-full ${styles.line}
                        transition-colors duration-300`}
          />
        )}
      </div>

      {/* Text content */}
      <div className="pt-1.5 pb-5">
        <p className={`text-[13px] leading-tight ${styles.label}`}>
          {stage.label}
          {stage.status === "delayed" && (
            <span className="inline-flex items-center gap-1 ml-1.5 px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider bg-amber-100 text-amber-700 rounded">
              <AlertTriangle size={10} /> Delayed
            </span>
          )}
        </p>
        <p className={`text-[11px] mt-0.5 ${styles.desc}`}>
          {stage.description}
        </p>
        {stage.date && (
          <p className="text-[10px] text-gray-400 mt-0.5">{stage.date}</p>
        )}
      </div>
    </li>
  );
}

/**
 * Reusable delivery timeline showing all stages with visual progress.
 *
 * @param {{ stages: Array<{ id: string, label: string, description: string, date: string, status: string }> }} props
 */
export default function DeliveryTimeline({ stages }) {
  return (
    <section className="px-4 py-5">
      <h2 className="text-[13px] font-semibold text-gray-900 uppercase tracking-wide mb-4">
        Delivery Progress
      </h2>

      <ol className="list-none">
        {stages.map((stage, i) => (
          <TimelineStep
            key={stage.id}
            stage={stage}
            isLast={i === stages.length - 1}
          />
        ))}
      </ol>
    </section>
  );
}
