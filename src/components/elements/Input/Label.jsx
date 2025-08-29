export default function Label({ htmlFor, children }) {
  return (
    <label
      className="block mb-2 font-bold text-sm text-slate-700"
      htmlFor={htmlFor}
    >
      {children}
    </label>
  );
}
