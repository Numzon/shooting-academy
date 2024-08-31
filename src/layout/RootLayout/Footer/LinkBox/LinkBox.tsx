import LinkItem from '../LinkItem/LinkItem';

type LinkBoxProps = {
  children: React.ReactElement<typeof LinkItem> | Array<React.ReactElement<typeof LinkItem>>;
};

export const LinkBox = ({ children }: LinkBoxProps) => {
  return (
    <div className="footer__link-box">
      <ul className="footer__list u-margin-top-small">{children}</ul>
    </div>
  );
};

export default LinkBox;
