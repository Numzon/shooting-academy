import { ComponentPropsWithoutRef } from 'react';
import { getButtonClassName } from '../../utlis/button';
import { ButtonVariant } from '../../types/button';

type LinkButtonProps = {
  children?: React.ReactNode;
  variant: ButtonVariant;
  animated?: boolean;
} & ComponentPropsWithoutRef<'a'>;

export const LinkButton = ({
  className,
  children,
  variant,
  animated,
  ...fieldProps
}: LinkButtonProps) => {
  const combinedClassName = getButtonClassName({ variant, animated, className });

  return (
    <a className={combinedClassName} {...fieldProps}>
      {children}
    </a>
  );
};

export default LinkButton;
