import { useState } from 'react';
import { useController, useFormContext } from 'react-hook-form';

type TextFieldProps = {
  children: React.ReactNode;
  id: string;
  name: string;
  placeholder?: string;
  error?: string;
};

export const TextField = ({ name, children, placeholder, id }: TextFieldProps) => {
  const { control } = useFormContext();
  const [errorTextVisible, setErrorTextVisible] = useState(false);
  const {
    field: { ref, value, ...fieldProps },
    fieldState: { error, invalid },
  } = useController({ name, control });

  return (
    <div className="form__group">
      <input
        className={`form__input ${invalid ? 'form__input--invalid' : ''}`}
        type="text"
        value={value}
        placeholder={placeholder}
        {...fieldProps}
        name={name}
        ref={ref}
        id={id}
      />
      <label htmlFor={id} className="form__label">
        {children}
      </label>

      <span
        data-testid="helper-icon"
        className={`form__helper-icon ${invalid && !errorTextVisible ? 'form__helper-icon--visible' : ''}`}
        onClick={() => setErrorTextVisible((prev) => !prev)}
      >
        Click Me!
      </span>
      <div
        data-testid="helper-box"
        className={`form__helper-box ${errorTextVisible ? 'form__helper-box--visible' : ''}`}
        onClick={() => setErrorTextVisible((prev) => !prev)}
      >
        <span className="form__helper-text">{error?.message ?? ''}</span>
        <div className="form__helper__close">&#10005;</div>
      </div>
    </div>
  );
};

export default TextField;
