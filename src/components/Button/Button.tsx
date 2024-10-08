import { ComponentPropsWithoutRef } from 'react';
import { getButtonClassName } from '../../utlis/button';
import { ButtonVariant } from '../../types/button';

type ButtonProps = {
  children?: React.ReactNode;
  variant: ButtonVariant;
  animated?: boolean;
} & ComponentPropsWithoutRef<'button'>;

export const Button = ({ className, children, variant, animated, ...fieldProps }: ButtonProps) => {
  const combinedClassName = getButtonClassName({ variant, animated, className });

  return (
    <button className={combinedClassName} {...fieldProps}>
      {children}
    </button>
  );
};

export default Button;
