import { createContext } from 'react';

type HomePopupContextValue = {
  isVisible: boolean;
  toggle: () => void;
};

export const HomePopupContext = createContext<HomePopupContextValue>(null!);

export default HomePopupContext;
