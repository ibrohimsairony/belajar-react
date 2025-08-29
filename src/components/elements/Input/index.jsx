import Label from "./Label";
import Input from "./Input";

export default function InputForm({ name, placeholder, label, type, ref }) {
  return (
    <div className="mb-6">
      <Label htmlFor={name}>{label}</Label>
      <Input
        type={type}
        placeholder={placeholder}
        name={name}
        id={name}
        ref={ref}
      />
    </div>
  );
}
