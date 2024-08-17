import { ComponentPropsWithoutRef } from 'react';

type ButtonType = 'primary' | 'secondary' | 'tertiary';

type ButtonProps = {
  children?: React.ReactNode;
  type: ButtonType;
  animated?: boolean;
} & ComponentPropsWithoutRef<'a'>;

export const Button = ({ className, children, type, animated, ...fieldProps }: ButtonProps) => {
  const getClassName = () => {
    const buttonStyles = ['btn'];

    if (type) {
      buttonStyles.push('btn--' + type);
    }

    if (animated) {
      buttonStyles.push('btn--animated');
    }

    if (className) {
      buttonStyles.push(className);
    }

    return buttonStyles.join(' ');
  };

  return (
    <a className={getClassName()} {...fieldProps}>
      {children}
    </a>
  );
};

export default Button;
