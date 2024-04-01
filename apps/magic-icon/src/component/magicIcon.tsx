import { useState, type RefObject, useEffect } from "react";
import { motion } from "framer-motion";
import icons, { type IconType } from "../assets/icons";

type MagicIconProps = {
  icon: IconType,
  cursor: {
    x: number;
    y: number;
  }
  containerRef: RefObject<HTMLDivElement>;
  mouseOnContainer: boolean;
}

export default function MagicIcon({ icon, cursor, containerRef, mouseOnContainer }: MagicIconProps) {
  const [gradientCenter, setGradientCenter] = useState({ cx: "50%", cy: "50%" });

  useEffect(() => {
    if (containerRef && containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const cxPercentage = (cursor.x / rect.width) * 100;
      const cyPercentage = (cursor.y / rect.height) * 100;

      setGradientCenter({
        cx: `${cxPercentage}%`,
        cy: `${cyPercentage}%`
      })
    }
  }, [cursor, containerRef]);

  return (
    <svg
      fill="none"
      viewBox="0 0 24 24"
      className="size-32 lg:size-64 duration-200 transition-all">
      <defs>
        <radialGradient
          id={`emeraldGradient-${icon}`}
          gradientUnits="userSpaceOnUse"
          r="35%"
          cx={gradientCenter.cx}
          cy={gradientCenter.cy}
        >
          {mouseOnContainer && <stop stopColor="rgb(254 240 138)" />}
          <stop offset={1} stopColor="rgb(40,47,60)" />
        </radialGradient>
      </defs>
      <motion.path
        strokeLinecap="round"
        strokeLinejoin="round"
        className="fill-gray-900"
        stroke={`url(#emeraldGradient-${icon})`}
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1.1 }}
        transition={{
          duration: 3,
          ease: "easeInOut",
        }}
        d={icons.get(icon)} />
    </svg>
  )
}
