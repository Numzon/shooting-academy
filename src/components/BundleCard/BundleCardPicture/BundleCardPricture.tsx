export type PictureType = 'primary' | 'secondary' | 'tertiary';

type BundleCardPictureProps = {
  type: PictureType;
};

export const BundleCardPicture = ({ type }: BundleCardPictureProps) => {
  return <div className={`bundle-card__picture bundle-card__picture--${type}`}>&nbsp;</div>;
};

export default BundleCardPicture;
