type HeadingSectionPrimaryProps = {
  children: React.ReactNode;
};

export const HeadingPrimary = ({ children }: HeadingSectionPrimaryProps) => {
  return <h1 className="heading-primary">{children}</h1>;
};

export default HeadingPrimary;
