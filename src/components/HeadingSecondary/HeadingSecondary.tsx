type HeadingSecondaryProps = {
  children: React.ReactNode;
};

export const HeadingSecondary = ({ children }: HeadingSecondaryProps) => {
  return <h2 className="heading-secondary">{children}</h2>;
};

export default HeadingSecondary;
