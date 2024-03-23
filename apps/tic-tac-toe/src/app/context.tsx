import { ReactNode, createContext, useContext, useState } from "react";
 
export type State = 'x' | 'o' | undefined;

type ContextType = {
  state: State;
  setState: (state: State) => void;
};

export const AppContext = createContext<ContextType | undefined>(undefined);
 
export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [state, setState] = useState<ContextType["state"]>(undefined);
 
  return (
    <AppContext.Provider value={{ state, setState }}>
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