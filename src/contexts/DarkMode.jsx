import { createContext, useState } from "react";

// Perbaiki baris ini
export const DarkModeContext = createContext();

  const [isDarkMode, setIsDarkMode] = useState(false);
  return (
    <DarkModeContext.Provider value={{ isDarkMode, setIsDarkMode }}>
    </DarkModeContext.Provider>
  );
}
