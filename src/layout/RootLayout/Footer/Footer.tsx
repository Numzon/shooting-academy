import { Column, Row } from '../../../components/Grid';
import DetailsBox from './DetailsBox';
import LinkBox from './LinkBox';
import LinkItem from './LinkItem/LinkItem';
import Logo from './Logo';

export const Footer = () => {
  return (
    <footer className="footer">
      <Row>
        <Column size="12">
          <Logo />
        </Column>
        <Column size="6">
          <LinkBox>
            <LinkItem to="#">Company</LinkItem>
            <LinkItem to="#">Contact us</LinkItem>
            <LinkItem to="#">Carrers</LinkItem>
            <LinkItem to="#">Privacy policy</LinkItem>
            <LinkItem to="#">Terms</LinkItem>
          </LinkBox>
        </Column>
        <Column size="6">
          <DetailsBox>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam vel a culpa natus
            optio! Mollitia, repudiandae placeat sapiente, laudantium libero expedita consectetur,
            quis nulla dolorum voluptate inventore odio omnis facere.
          </DetailsBox>
        </Column>
      </Row>
    </footer>
  );
};

export default Footer;
