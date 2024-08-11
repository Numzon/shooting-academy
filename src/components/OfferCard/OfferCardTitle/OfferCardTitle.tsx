import HeadingTertiary from '../../../components/HeadingTertiary';

type OfferCardTitleProps = {
  children: React.ReactNode;
};

export const OfferCardTitle = ({ children }: OfferCardTitleProps) => {
  return (
    <div className="u-margin-bottom-small">
      <HeadingTertiary>{children}</HeadingTertiary>
    </div>
  );
};

export default OfferCardTitle;
