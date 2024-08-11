type ParagraphProps = {
  children: React.ReactNode;
};

export const Paragraph = ({ children }: ParagraphProps) => {
  return <p className="paragraph">{children}</p>;
};

export default Paragraph;
