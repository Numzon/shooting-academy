import NavigationItem from './NavigationItem';

export const NavigationList = () => {
  return (
    <ul className="navigation__list">
      <NavigationItem to="/">Home</NavigationItem>
      <NavigationItem to="/news">Ogłoszenia</NavigationItem>
      <NavigationItem to="/offer">Oferta</NavigationItem>
      <NavigationItem to="/services">Usługi</NavigationItem>
      <NavigationItem to="/about">O nas</NavigationItem>
      <NavigationItem to="/contact">Kontakt</NavigationItem>
    </ul>
  );
};

export default NavigationList;
