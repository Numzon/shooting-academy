import NavigationList from './NavigationList';
import NavigationCheckboxContextProvider from '../../../contexts/NavigationCheckboxContext';
import { NavigationButton } from './NavigationButton/NavigationButton';

export const Navigation = () => {
  return (
    <NavigationCheckboxContextProvider>
      <nav className="navigation">
        <NavigationButton />
        <div className="navigation__background">&nbsp;</div>
        <NavigationList />
      </nav>
    </NavigationCheckboxContextProvider>
  );
};

export default Navigation;
