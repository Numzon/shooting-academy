import { BundleCardPrice } from '../BundleCardPrice';
import Button, { ButtonType } from '../../../components/Button/Button';

export type BackSideColor = 'primary' | 'secondary' | 'tertiary';

type BundleCardSideBackProps = {
  price: string;
  buttonType: ButtonType;
  to: string;
  color: BackSideColor;
  children: Array<React.ReactElement<'li'>> | React.ReactElement<'li'>;
};

export const BundleCardSideBack = ({
  price,
  buttonType,
  to,
  color,
  children,
}: BundleCardSideBackProps) => {
  return (
    <div className={`bundle-card__side bundle-card__side--back bundle-card__side--back-${color}`}>
      <div className="bundle-card__cta">
        <BundleCardPrice heading="Only" price={price} />
        <div className="bundle-card__dates">
          <ul>{children}</ul>
        </div>
        <div className="u-text-align-center u-margin-top-medium">
          <Button type={buttonType} href={to}>
            Buy now!
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BundleCardSideBack;
