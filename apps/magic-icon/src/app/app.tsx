import MagicContainer from "../component/magicContainer";
import { type IconType } from "../assets/icons";

export default function App() {
  const icons: Array<IconType> = ['star', 'ship', 'moon'];
  return (
    <div className="flex flex-col lg:flex-row place-items-center justify-center w-full h-screen overflow-hidden">
      {icons.map((icon, index) => (<MagicContainer key={index} icon={icon} />))}
    </div>
  );
}

