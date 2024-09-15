import { useState } from 'react';
import HomePopupContext from './HomePopupContext';

type HomePopupContextProviderProps = {
  children: React.ReactNode;
};

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
