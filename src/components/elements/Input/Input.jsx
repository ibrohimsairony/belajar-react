export default function input({ type, placeholder, name, ref }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      name={name}
      ref={ref}
      autoComplete="off"
      className="text-sm border rounded w-full py-2 px-3 text-slate-700 border-slate-300 ring-0 placeholder:text-slate-500"
    />
  );
}
