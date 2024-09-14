import { ButtonVariant } from '../types/button';

type ButtonClassNameProps = {
  variant: ButtonVariant;
  animated?: boolean;
  className?: string;
};

export const getButtonClassName = ({ variant, animated, className }: ButtonClassNameProps) => {
  const buttonStyles = ['btn', `btn--${variant}`];

  if (animated) {
    buttonStyles.push('btn--animated');
  }

  if (className) {
    buttonStyles.push(className);
  }

  return buttonStyles.join(' ');
};
