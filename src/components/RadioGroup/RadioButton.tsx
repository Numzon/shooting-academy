import React, { ComponentPropsWithRef } from 'react';
import { useController, useFormContext } from 'react-hook-form';

type RadioButton = {
  id: string;
  name: string;
  children: React.ReactNode;
  checked?: boolean;
} & Omit<ComponentPropsWithRef<'input'>, 'id' | 'type' | 'name' | 'checked' | 'required'>;

export const RadioButton = ({ id, name, checked, children, value }: RadioButton) => {
  const { control } = useFormContext();
  const {
    field: { ref, ...fieldProps },
    fieldState: { invalid },
  } = useController({ name, control });

  return (
    <div className="form__radio-box">
      <input
        type="radio"
        {...fieldProps}
        checked={checked}
        value={value}
        id={id}
        ref={ref}
        name={name}
        className="form__radio-input"
      />
      <label
        htmlFor={id}
        className={`form__radio-label ${invalid ? 'form__radio-label--invalid' : ''}`}
      >
        {children}
      </label>
    </div>
  );
};

export default RadioButton;
