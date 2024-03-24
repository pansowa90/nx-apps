import { ReactNode, createContext, useContext, useState } from "react";
import { DEFAULT_STATE } from "@/app/app.defaults";

export type State = 'x' | 'o' | undefined;

type ContextType = {
  state: State;
  result: string | null;
  gameState: Array<State>;
  setState: (state: State) => void;
  setGameState: (gameState: Array<State>) => void;
  setResult: (result: string | null) => void;
};

export const AppContext = createContext<ContextType | undefined>(undefined);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [state, setState] = useState<ContextType["state"]>(undefined);
  const [result, setResult] = useState<ContextType["result"]>(null);
  const [gameState, setGameState] = useState<ContextType["gameState"]>(DEFAULT_STATE);

  return (
    <AppContext.Provider value={{ state, setState, result, setResult, gameState, setGameState }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error("useThemeContext must be used inside the ThemeProvider");
  }

  return context;
};