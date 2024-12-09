import React from "react";
import { Form as RsForm } from "reactstrap";
import { Button } from "../Button";
function Form({ children, onSubmit, className, btnText }) {
  return (
    <RsForm onSubmit={onSubmit} className={className}>
      {children}
      <Button type="submit" text={btnText} />
    </RsForm>
  );
}

export { Form };
