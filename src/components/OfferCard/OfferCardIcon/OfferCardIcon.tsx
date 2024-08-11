type LineaIcon =
  | 'icon-basic-world'
  | 'icon-basic-settings'
  | 'icon-basic-laptop'
  | 'icon-basic-sheet-txt';

type OfferCardType = 'primary' | 'secondary' | 'tertiary';

type OfferCardIconProps = {
  icon: LineaIcon;
  type?: OfferCardType;
  className?: string;
};

export const OfferCardIcon = ({ icon, type, className }: OfferCardIconProps) => {
  const iconStyles = ['offer-card__icon'];

  const getIconStyles = () => {
    iconStyles.push(icon);

    if (type) {
      iconStyles.push(`offer-card__icon--${type}`);
    }

    if (className) {
      iconStyles.push(className);
    }

    return iconStyles.join(' ');
  };

  return <i className={getIconStyles()}></i>;
};

export default OfferCardIcon;
