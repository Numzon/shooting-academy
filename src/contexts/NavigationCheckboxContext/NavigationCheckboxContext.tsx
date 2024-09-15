import { createContext } from 'react';

type NavigationCheckboxContextValue = {
  isChecked: boolean;
  setIsChecked: (value: boolean) => void;
};

export const NavigationCheckboxContext = createContext<NavigationCheckboxContextValue>(null!);

export default NavigationCheckboxContext;
