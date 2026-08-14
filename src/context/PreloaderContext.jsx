import React, { createContext, useContext, useState } from "react";

const PreloaderContext = createContext({
  isPreloaderFinished: false,
  setPreloaderFinished: () => {},
});

export function PreloaderProvider({ children }) {
  const [isPreloaderFinished, setIsPreloaderFinished] = useState(false);

  return (
    <PreloaderContext.Provider
      value={{
        isPreloaderFinished,
        setPreloaderFinished: () => setIsPreloaderFinished(true),
      }}
    >
      {children}
    </PreloaderContext.Provider>
  );
}

export function usePreloader() {
  return useContext(PreloaderContext);
}
