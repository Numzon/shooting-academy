import { createContext, useState } from 'react';

export type NavigationCheckboxContextValue = {
  isChecked: boolean;
  setIsChecked: (value: boolean) => void;
};

export const NavigationCheckboxContext = createContext<NavigationCheckboxContextValue>(null!);

export const NavigationCheckboxContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <NavigationCheckboxContext.Provider
      value={{
        isChecked: isChecked,
        setIsChecked: setIsChecked,
      }}
    >
      {children}
    </NavigationCheckboxContext.Provider>
  );
};

export default NavigationCheckboxContextProvider;
