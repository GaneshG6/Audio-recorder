import React from "react";
import { Button as RSButton } from "reactstrap";
function Button({
  id,
  loading,
  type = "button",
  text,
  color = "primary",
  size = "lg",
  onClick,
  outline = false,
  className,
  ...rest
}) {
  return (
    <>
      <RSButton
        size={size}
        color={color}
        onClick={onClick}
        outline={outline}
        type={type}
        {...rest}
      >
        <div className={`d-flex align-items-center justify-content-center`}>
          <span className="fw-normal">{text}</span>
        </div>
      </RSButton>
    </>
  );
}

export { Button };
