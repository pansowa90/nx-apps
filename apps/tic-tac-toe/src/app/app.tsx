import Layer from '@/component/layer/layer';
import Game from '@component/game/game';
import { AppProvider } from '@/app/context';
import Popup from '@/component/popup/popup';

export function App() {

  return (
    <AppProvider>
      <Layer />
      <Game />
      <Popup />
    </AppProvider>
  );
}

export default App;
