type TextFieldType = 'text' | 'email';

type TextFieldProps = {
  children: React.ReactNode;
  id: string;
  type: TextFieldType;
  placeholder?: string;
  required?: boolean;
};

export const TextField = ({ children, placeholder, id, type, required }: TextFieldProps) => {
  return (
    <div className="form__group">
      <input
        className="form__input"
        type={type}
        id={id}
        placeholder={placeholder}
        required={required}
      />
      <label htmlFor={id} className="form__label">
        {children}
      </label>
    </div>
  );
};

export default TextField;
