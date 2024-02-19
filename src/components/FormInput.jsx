import { useState } from "react";
import "./formInput.css";

const FormInput = (props) => {
  const { label, onChange, id, errorMessage, ...inputProps } = props;

  const [focused, setFocused] = useState(false);

  const handleFocus = (e) => {
    setFocused(true);
  };

  return (
    <div className='formInput mb-2'>
      <label className='form-label'>{label}</label>
      <input
        className='form-control'
        {...inputProps}
        onChange={onChange}
        onBlur={handleFocus}
        focused={focused.toString()}
      />
      <span>{errorMessage}</span>
    </div>
  );
};

export default FormInput;
