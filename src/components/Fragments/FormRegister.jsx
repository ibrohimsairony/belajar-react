import Button from "../elements/Button";
import InputForm from "../elements/Input";

export default function FormRegister() {
  return (
    <form action="">
      <InputForm
        type="text"
        placeholder="insert your full name here..."
        label="Fullname"
        name="fullname"
      />
      <InputForm
        type="email"
        placeholder="example@email.com"
        label="Email"
        name="email"
      />
      <InputForm
        type="password"
        placeholder="******"
        label="Password"
        name="password"
      />
      <InputForm
        type="password"
        placeholder="******"
        label="Confirm Password"
        name="confirmpassword"
      />
      <Button classname="bg-blue-600 w-full">Register</Button>
    </form>
  );
}
