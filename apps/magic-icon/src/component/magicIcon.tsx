import { useState, type RefObject, useEffect } from "react";
import { motion } from "framer-motion";

export type IconType = 'moon' | 'ship' | 'star';

type MagicIconProps = {
  custom: number;
  icon: IconType,
  cursor: {
    x: number;
    y: number;
  }
  containerRef: RefObject<HTMLDivElement>;
  mouseOnContainer: boolean;
}

const icons = new Map<IconType, string>();

icons.set('moon', "M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z");
icons.set('ship', "M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z")
icons.set('star', "M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z")

export default function MagicIcon({ custom, icon, cursor, containerRef, mouseOnContainer }: MagicIconProps) {
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
      className="w-64 h-64 duration-200 transition-all">
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
        stroke={`"url(#emeraldGradient-${icon})"`}
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{
          duration: 3,
          ease: "easeInOut",
        }}
        custom={custom}
        d={icons.get(icon)} />
    </svg>
  )
}
