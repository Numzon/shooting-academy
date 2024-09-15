import { useContext } from 'react';
import NavigationCheckboxContext from '../NavigationCheckboxContext';

export const useNavigationCheckbox = () => {
  const context = useContext(NavigationCheckboxContext);

  if (!context) {
    throw new Error('useNavigationCheckbox must be used within a NavigationCheckboxContext');
  }

  return context;
};

export default useNavigationCheckbox;
