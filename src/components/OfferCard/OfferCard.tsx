type OfferCardProps = {
  children: React.ReactNode;
};

export const OfferCard = ({ children }: OfferCardProps) => {
  return <div className="offer-card">{children}</div>;
};

export default OfferCard;
