import { useId } from "react";

// * useId digunakan untuk mengenerate id unik

function Input({ id }) {
  const generateId = useId();

  const idInput = `${generateId}-${id}`;
  return (
    <label htmlFor={idInput}>
      <input type="text" id={idInput} />
    </label>
  );
}

export default function UseIdPage() {
  return (
    <>
      <Input id="username" />
      <Input />
      <Input />
      <Input />
      <Input />
    </>
  );
}
