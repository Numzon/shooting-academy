import { useContext } from 'react';
import { HomePopupContext } from '../HomePopupContext';

export const useHomePopup = () => {
  const context = useContext(HomePopupContext);

  if (!context) {
    throw new Error('useHomePopup must be used within a HomePopupContext');
  }

  return context;
};

export default useHomePopup;
