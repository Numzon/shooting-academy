import { BundleCardPicture, PictureType } from '../BundleCardPicture';
import { BundleCardHeading, BundleCardHeadingType } from '../BundleCardHeading';

type BundleCardSideFrontProps = {
  heading: string;
  pictureType: PictureType;
  headingType: BundleCardHeadingType;
  children: React.ReactElement<'li'> | Array<React.ReactElement<'li'>>;
};

export const BundleCardSideFront = ({
  heading,
  pictureType,
  headingType,
  children,
}: BundleCardSideFrontProps) => {
  return (
    <div className="bundle-card__side bundle-card__side--front">
      <BundleCardPicture type={pictureType} />
      <BundleCardHeading type={headingType}>{heading}</BundleCardHeading>
      <div className="bundle-card__details">
        <ul>{children}</ul>
      </div>
    </div>
  );
};

export default BundleCardSideFront;
