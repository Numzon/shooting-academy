import { Paths } from '../../../../routes/paths';
import NavigationItem from './NavigationItem';

export const NavigationList = () => {
  return (
    <ul className="navigation__list">
      <NavigationItem to={Paths.home}>Home</NavigationItem>
      <NavigationItem to={Paths.news}>News</NavigationItem>
      <NavigationItem to="/offer">Offer</NavigationItem>
      <NavigationItem to="/services">Services</NavigationItem>
      <NavigationItem to="/about">About us</NavigationItem>
      <NavigationItem to="/contact">Contact</NavigationItem>
      <NavigationItem to={Paths.signIn}>Sign in</NavigationItem>
      <NavigationItem to={Paths.login}>Login</NavigationItem>
    </ul>
  );
};

export default NavigationList;
