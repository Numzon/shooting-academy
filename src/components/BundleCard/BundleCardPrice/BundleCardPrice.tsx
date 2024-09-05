type BundleCardPriceProps = {
  price: string;
  heading: string;
};

export const BundleCardPrice = ({ price, heading }: BundleCardPriceProps) => {
  return (
    <div className="bundle-card__price-box">
      <p className="bundle-card__price-text">{heading}</p>
      <p className="bundle-card__price">{price}</p>
    </div>
  );
};

export default BundleCardPrice;
