import { useRef, useState, MouseEvent, TouchEvent, SyntheticEvent } from "react";
import MagicIcon, { IconType } from "../component/magicIcon";

function isTouchEvent(e: TouchEvent | MouseEvent): e is TouchEvent {
  return e && 'touches' in e;
}

function isMouseEvent(e: TouchEvent | MouseEvent): e is MouseEvent {
  return e && 'screenX' in e;
}

export default function MagicContainer({ icon }: { icon: IconType; }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const [mouseOnContainer, setMouseOnContainer] = useState(false);

  const handleMove = (event: React.TouchEvent | React.MouseEvent) => {
    event.persist();

    let x = 0;
    let y = 0;

    if (containerRef.current !== null) {
      const rect = containerRef.current.getBoundingClientRect();

      if (isTouchEvent(event)) {
        x = Math.round(event.touches[0].clientX);
        y = Math.round(event.touches[0].clientY);
      }

      if (isMouseEvent(event)) {
        x = event.clientX;
        y = event.clientY;
      }

      setCursor({
        x: x - rect.left,
        y: y - rect.top
      });
    }
  };

  return (
    <div
      id={icon}
      ref={containerRef}
      onMouseMove={(event) => handleMove(event)}
      onTouchMove={(event) => handleMove(event)}
      onTouchStart={() => setMouseOnContainer(true)}
      onTouchEnd={() => setMouseOnContainer(false)}
      onMouseEnter={() => setMouseOnContainer(true)}
      onMouseLeave={() => setMouseOnContainer(false)}
      className="flex place-items-center justify-center w-[24] h-[24] p-4 lg:p-8 stroke-[.2] hover:stroke-[.25] lg:cursor-pointer">
      <MagicIcon
        icon={icon}
        cursor={cursor}
        containerRef={containerRef}
        mouseOnContainer={mouseOnContainer}
      />
    </div>
  );
}
