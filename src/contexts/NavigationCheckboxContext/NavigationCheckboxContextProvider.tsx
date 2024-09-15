import { useState } from 'react';
import NavigationCheckboxContext from './NavigationCheckboxContext';

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
