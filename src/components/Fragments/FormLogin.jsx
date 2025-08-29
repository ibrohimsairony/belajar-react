import { useEffect, useRef, useState } from "react";
import Button from "../elements/Button";
import InputForm from "../elements/Input";
import { login } from "../../services/auth.service";

export default function FormLogin() {
  const [loginFailed, setLoginFailed] = useState("");
  const usernameRef = useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    // window.location.href = "/products";
    const data = {
      username: e.target.username.value,
      password: e.target.password.value,
    };
    login(data, (status, res) => {
      if (status) {
        localStorage.setItem("token", res);
        window.location.href = "/products";
      } else {
        setLoginFailed(res || "error connect to API");
      }
    });
  };
  useEffect(() => {
    usernameRef.current.focus();
  }, []);
  return (
    <form onSubmit={handleSubmit}>
      <InputForm
        type="username"
        placeholder="John doe"
        label="Username"
        name="username"
        ref={usernameRef}
      />
      <InputForm
        type="password"
        placeholder="******"
        label="Password"
        name="password"
      />
      <Button classname="w-full bg-blue-600 hover:cursor-pointer" type="submit">
        Login
      </Button>
      <p className="text-red-600 text-center text-sm mt-5">{loginFailed}</p>
    </form>
  );
}
