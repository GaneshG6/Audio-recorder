import React from "react";
import { Form, Input } from "../../../Component";
import { useInput } from "../../../Hooks";

function SignUp() {
  const email = useInput("");
  const password = useInput("");
  const name = useInput("");
  function handleSubmit(e) {
    e.preventDefault();
    console.log(email.value, password.value, 555);
  }
  return (
    <div className="">
      <Form btnText={"Sign up"} onSubmit={handleSubmit}>
        <Input
          label={"Name"}
          value={name.value}
          type={"text"}
          onChange={name.onChange}
        />
        <Input
          label={"Email"}
          value={email.value}
          type={"email"}
          onChange={email.onChange}
        />
        <Input
          label={"Password"}
          type={"password"}
          value={password.value}
          onChange={password.onChange}
        />
      </Form>
    </div>
  );
}

export { SignUp };
