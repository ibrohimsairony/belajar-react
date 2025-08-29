import { Link } from "react-router-dom";

export default function AuthLayouts({ children, title }) {
  return (
    <div className="flex justify-center min-h-screen items-center ">
      <div className="w-full max-w-xs">
        <h1 className="text-3xl font-bold text-center mb-2 text-blue-600">
          {title}
        </h1>
        <p className="mb-4 font-medium text-slate-500 text-center">
          <span className="text-blue-600 font-semibold">Welcome,</span> Please
          enter your details
        </p>
        {children}

        <p className="text-sm mt-5 text-center">
          {title.toLowerCase() === "login"
            ? "Don't have an account? "
            : "Have an account "}

          {title.toLowerCase() === "login" && (
            <Link to="/register" className="font-bold text-blue-600 ">
              Sign Up
            </Link>
          )}

          {title.toLowerCase() === "register" && (
            <Link to="/login" className="font-bold text-blue-600 ">
              Sign In
            </Link>
          )}
        </p>
      </div>
    </div>
  );
}

{
  /* <p className="text-sm mt-5 text-center">
  Have an account{" "}
</p>; */
}
