type DetailsBoxProps = {
  children: React.ReactNode;
};

export const DetailsBox = ({ children }: DetailsBoxProps) => {
  return (
    <div className="footer__details-box">
      <div className="footer__details u-margin-top-small">{children}</div>
    </div>
  );
};

export default DetailsBox;
