import { Paths } from '../../../../routes/paths';
import NavigationActionButton from './NavigationActionButton';
import NavigationItem from './NavigationItem';
import useAuthenticate from '../../../../contexts/AuthenticateContext/hooks/useAuthenticate';

export const NavigationList = () => {
  const { isAuthenticated, clear } = useAuthenticate();

  return (
    <ul className="navigation__list">
      <NavigationItem to={Paths.home}>Home</NavigationItem>
      <NavigationItem to={Paths.news}>News</NavigationItem>
      <NavigationItem to="/offer">Offer</NavigationItem>
      <NavigationItem to="/services">Services</NavigationItem>
      <NavigationItem to="/about">About us</NavigationItem>
      <NavigationItem to="/contact">Contact</NavigationItem>
      {!isAuthenticated && (
        <>
          <NavigationItem to={Paths.signIn}>Sign in</NavigationItem>
          <NavigationItem to={Paths.login}>Login</NavigationItem>
        </>
      )}
      {isAuthenticated && (
        <NavigationActionButton
          onClick={() => {
            clear();
          }}
        >
          Logout
        </NavigationActionButton>
      )}
    </ul>
  );
};

export default NavigationList;
