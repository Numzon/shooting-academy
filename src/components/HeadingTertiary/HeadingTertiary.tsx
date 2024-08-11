type HeadingTertiaryProps = {
  children: React.ReactNode;
};

export const HeadingTertiary = ({ children }: HeadingTertiaryProps) => {
  return <h3 className="heading-tertiary">{children}</h3>;
};
export default HeadingTertiary;
