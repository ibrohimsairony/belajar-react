export default function Button({
  children,
  classname,
  type = "button",
  onClick,
}) {
  return (
    <button
      className={`h-10 px-6 font-semibold rounded-lg text-white ${classname} hover:pointer-cursor`}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
