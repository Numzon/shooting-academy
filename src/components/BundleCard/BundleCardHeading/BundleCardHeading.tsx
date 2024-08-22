export type BundleCardHeadingType = 'primary' | 'secondary' | 'tertiary';

type BundleCardHeadingProps = {
  type: BundleCardHeadingType;
  children: React.ReactNode;
};

export const BundleCardHeading = ({ type, children }: BundleCardHeadingProps) => {
  return (
    <h4 className="bundle-card__heading">
      <span className={`bundle-card__heading-span bundle-card__heading-span--${type}`}>
        {children}
      </span>
    </h4>
  );
};

export default BundleCardHeading;
