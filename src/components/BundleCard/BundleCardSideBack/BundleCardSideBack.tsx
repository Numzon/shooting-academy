import { BundleCardPrice } from '../BundleCardPrice';
import Button, { ButtonType } from '../../../components/Button/Button';
import useHomePopup from '../../../contexts/HomePopupContext/hooks';

export type BackSideColor = 'primary' | 'secondary' | 'tertiary';

type BundleCardSideBackProps = {
  price: string;
  buttonType: ButtonType;
  color: BackSideColor;
  children: Array<React.ReactElement<'li'>> | React.ReactElement<'li'>;
};

export const BundleCardSideBack = ({
  price,
  buttonType,
  color,
  children,
}: BundleCardSideBackProps) => {
  const { toggle } = useHomePopup();

  return (
    <div className={`bundle-card__side bundle-card__side--back bundle-card__side--back-${color}`}>
      <div className="bundle-card__cta">
        <BundleCardPrice heading="Only" price={price} />
        <div className="bundle-card__dates">
          <ul>{children}</ul>
        </div>
        <div className="u-text-align-center u-margin-top-medium">
          <Button
            type={buttonType}
            onClick={(event) => {
              event.preventDefault();
              event.stopPropagation();
              toggle();
            }}
          >
            Show popup!
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BundleCardSideBack;
