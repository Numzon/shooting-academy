import LinkButton from '../../../components/LinkButton';
import Heading from './Heading';
import Logo from './Logo';

export const Header = () => {
  return (
    <>
      <header className="header">
        <Logo />
        <Heading />
        <div className="header__button-box">
          <LinkButton href="#" variant="secondary" className="u-margin-left-medium" animated>
            Lorem
          </LinkButton>
          <LinkButton href="#" variant="tertiary" className="u-margin-left-medium" animated>
            Lorem test
          </LinkButton>
        </div>
      </header>
    </>
  );
};

export default Header;
