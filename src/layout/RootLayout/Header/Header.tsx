import Button from '../../../components/Button';
import Heading from './Heading';
import Logo from './Logo';

export const Header = () => {
  return (
    <>
      <header className="header">
        <Logo />
        <Heading />
        <div className="header__button-box">
          <Button href="#" type="secondary" className="u-margin-left-medium" animated>
            Lorem
          </Button>
          <Button href="#" type="tertiary" className="u-margin-left-medium" animated>
            Lorem test
          </Button>
        </div>
      </header>
    </>
  );
};

export default Header;
