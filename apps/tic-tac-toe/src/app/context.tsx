import { ReactNode, createContext, useContext, useState } from "react";
import { DEFAULT_STATE } from "@/app/app.defaults";

export type State = 'x' | 'o' | undefined;

type ContextType = {
  currentPlayer: State;
  result: string | null;
  gameState: Array<State>;
  setCurrentPlayer: (state: State) => void;
  setGameState: (gameState: Array<State>) => void;
  setResult: (result: string | null) => void;
};

export const AppContext = createContext<ContextType | undefined>(undefined);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [result, setResult] = useState<ContextType["result"]>(null);
  const [gameState, setGameState] = useState<ContextType["gameState"]>(DEFAULT_STATE);
  const [currentPlayer, setCurrentPlayer] = useState<ContextType["currentPlayer"]>(undefined);

  return (
    <AppContext.Provider value={{ result, setResult, gameState, setGameState, currentPlayer, setCurrentPlayer }}>
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