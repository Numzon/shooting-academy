import { createContext, useState } from 'react';

export type HomePopupContextValue = {
  isVisible: boolean;
  toggle: () => void;
};

type HomePopupContextProviderProps = {
  children: React.ReactNode;
};

export const HomePopupContext = createContext<HomePopupContextValue>(null!);

export const HomePopupContextProvider = ({ children }: HomePopupContextProviderProps) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <HomePopupContext.Provider
      value={{ isVisible: isVisible, toggle: () => setIsVisible((prev) => !prev) }}
    >
      {children}
    </HomePopupContext.Provider>
  );
};

export default HomePopupContextProvider;
