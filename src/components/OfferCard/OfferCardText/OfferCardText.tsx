type OfferCardTextProps = {
  children: React.ReactNode;
};

export const OfferCardText = ({ children }: OfferCardTextProps) => {
  return <div className="offer-card__text">{children}</div>;
};

export default OfferCardText;
