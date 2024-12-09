import React from "react";
import { Input as RsInput } from "reactstrap";

function Input({
  id,
  className,
  name,
  label,
  maxLength = 40,
  value,
  onChange,
  type = "text",
  placeholder,
}) {
  return (
    <div className={` ${className}`}>
      {label && <label className="input-label">{label}</label>}
      <RsInput
        value={value}
        name={name}
        id={id}
        maxLength={maxLength}
        onChange={onChange}
        type={type}
        bsSize="lg"
        placeholder={placeholder}
      />
    </div>
  );
}

export { Input };
