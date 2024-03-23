import Layer from '@/component/layer/layer';
import Game from '@component/game/game';
import { AppProvider } from '@/app/context';

export function App() {

  return (
    <AppProvider>
      <Layer />
      <Game />
    </AppProvider>
  );
}

export default App;
