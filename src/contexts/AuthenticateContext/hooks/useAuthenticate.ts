import { useContext } from 'react';
import AuthenicateContext from '../AuthenicateContext';

export const useAuthenticate = () => {
  const context = useContext(AuthenicateContext);

  if (!context) {
    throw new Error('useHomePopup must be used within a HomePopupContext');
  }

  return context;
};

export default useAuthenticate;
