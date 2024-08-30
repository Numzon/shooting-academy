import { RadioButton } from './RadioButton';

type RadioGroupProps = {
  children: React.ReactElement<typeof RadioButton> | Array<React.ReactElement<typeof RadioButton>>;
};

export const RadioGroup = ({ children }: RadioGroupProps) => {
  return <div className="form__group">{children}</div>;
};

export default RadioGroup;
