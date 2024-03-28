import { useRef, useState, MouseEvent } from "react";
import MagicContainer from "../component/magicContainer";
import { type IconType } from "../component/magicIcon";

export default function App() {
  const icons: Array<IconType> = ['star', 'ship', 'moon'];
  return (
    <div className="flex place-items-center justify-center w-full h-screen">
      {icons.map((icon, index) => (<MagicContainer key={index} icon={icon} custom={index}/>))}
    </div>
  );
}

