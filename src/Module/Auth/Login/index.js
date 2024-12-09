import React from "react";
import { Form, Input } from "../../../Component";
import { useInput } from "../../../Hooks";
import { useNavigate } from "react-router-dom";
function Login() {
  const email = useInput("");
  const password = useInput("");
  const navigate = useNavigate()
  function handleSubmit(e) {
    e.preventDefault();
    console.log(email.value, password.value, 555);
navigate('/signup')
  }

  return (
    <div className="">
      <Form btnText={"Login"} onSubmit={handleSubmit}>
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
export { Login };
