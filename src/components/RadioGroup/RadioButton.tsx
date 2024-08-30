import React from 'react';

type RadioButton = {
  id: string;
  name: string;
  children: React.ReactNode;
  required?: boolean;
  checked?: boolean;
};

export const RadioButton = ({ id, name, checked, required, children }: RadioButton) => {
  return (
    <div className="form__radio-box">
      <input
        type="radio"
        id={id}
        name={name}
        checked={checked}
        className="form__radio-input"
        required={required}
      />
      <label htmlFor={id} className="form__radio-label">
        {children}
      </label>
    </div>
  );
};

export default RadioButton;
