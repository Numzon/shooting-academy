import {
  BundleCardSideFront,
  BundleCardSideBack,
  BundleCard,
} from '../../../components/BundleCard';
import HeadingPrimary from '../../../components/HeadingPrimary';

export const BundlesSection = () => {
  return (
    <div className="bundles-section">
      <div className="row">
        <div className="col-12">
          <div className="u-margin-bottom-huge">
            <HeadingPrimary>Lorem ipsum dolor sit ipsum dolor</HeadingPrimary>
          </div>
        </div>
        <div className="col-4">
          <BundleCard>
            <BundleCardSideFront
              pictureType="tertiary"
              headingType="tertiary"
              heading="Lorem ipsum dolor sit amet"
            >
              <li>Lorem ipsum dolor</li>
              <li>Lorem ipsum</li>
              <li>Lorem sit ipsum sit</li>
              <li>Lorem ipsum dolor sit amet</li>
              <li>Dolor sit</li>
            </BundleCardSideFront>
            <BundleCardSideBack buttonType="secondary" price="234$" color="tertiary">
              <li>07/11/2024 - 14/11/2024</li>
              <li>12/02/2025 - 19/02/2025</li>
              <li>14/03/2025 - 21/03/2025</li>
            </BundleCardSideBack>
          </BundleCard>
        </div>
        <div className="col-4">
          <BundleCard>
            <BundleCardSideFront
              pictureType="secondary"
              headingType="secondary"
              heading="Lorem dolor sit dolor sut"
            >
              <li>Lorem ipsum dolor</li>
              <li>Lorem ipsum</li>
              <li>Lorem sit ipsum sit</li>
              <li>Lorem ipsum dolor sit amet</li>
            </BundleCardSideFront>
            <BundleCardSideBack buttonType="primary" price="224$" color="secondary">
              <li>09/12/2024 - 14/11/2024</li>
              <li>12/02/2025 - 19/02/2025</li>
              <li>19/04/2025 - 28/04/2025</li>
            </BundleCardSideBack>
          </BundleCard>
        </div>
        <div className="col-4">
          <BundleCard>
            <BundleCardSideFront
              pictureType="primary"
              headingType="primary"
              heading="Lorem sit dolor sut"
            >
              <li>Lorem ipsum dolor</li>
              <li>Lorem ipsum</li>
              <li>Lorem sit ipsum sit</li>
              <li>Lorem ipsum dolor sit amet</li>
              <li>Dolor sit lorem</li>
            </BundleCardSideFront>
            <BundleCardSideBack buttonType="tertiary" price="124$" color="primary">
              <li>07/11/2024 - 14/11/2024</li>
              <li>12/02/2025 - 19/02/2025</li>
            </BundleCardSideBack>
          </BundleCard>
        </div>
      </div>
    </div>
  );
};

export default BundlesSection;
