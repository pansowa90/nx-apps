import { useRef, useState, MouseEvent } from "react";
import MagicIcon, { IconType } from "../component/magicIcon";

export default function MagicContainer({ icon }: { icon: IconType }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const [mouseOnContainer, setMouseOnContainer] = useState(false);

  const handleMouseMove = (event: MouseEvent<HTMLDivElement, globalThis.MouseEvent>) => {    
    if (containerRef.current !== null) {
      const rect = containerRef.current.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;

      setCursor({ x, y });
    }
  }

  return (
    <div
      key={icon}
      ref={containerRef}
      onMouseMove={(event) => handleMouseMove(event)}
      onMouseEnter={() => setMouseOnContainer(true)}
      onMouseLeave={() => setMouseOnContainer(false)}
      className="flex place-items-center justify-center w-[24] h-[24] p-8 stroke-[.2] hover:stroke-[.25] cursor-pointer">
      <MagicIcon icon={icon} cursor={cursor} containerRef={containerRef} mouseOnContainer={mouseOnContainer} />
    </div>
  );
}
