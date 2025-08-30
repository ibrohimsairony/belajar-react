import { createContext, useState } from "react";

// Perbaiki baris ini
export const DarkModeContext = createContext();

export default function DarkModeContextProvider({ children }) {
  const [isDarkMode, setIsDarkMode] = useState(false);
  return (
    <DarkModeContext.Provider value={{ isDarkMode, setIsDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
}
