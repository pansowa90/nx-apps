import { useRef, useState, MouseEvent } from "react";
import MagicContainer from "../component/magicContainer";

export default function App() {

  return (
    <div className="flex place-items-center justify-center w-full h-screen">
      <MagicContainer icon="star" />
      <MagicContainer icon="ship" />
      <MagicContainer icon="moon" />
    </div>
  );
}

