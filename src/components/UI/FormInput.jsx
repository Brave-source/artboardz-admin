import React, { forwardRef } from "react";

const FormInput = forwardRef((ref, name, inputProps) => {
  return (
    <>
      <label htmlFor={name}></label>
      <input
        ref={ref}
        name={name}
        id={name}
        {...inputProps}
        className="bg-transparent focus:outline outline-white"
      />
    </>
  );
});

export default FormInput;
