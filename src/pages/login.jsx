import FormLogin from "../components/Fragments/FormLogin";
import AuthLayouts from "../components/layouts/AuthLayouts";

export default function LoginPage() {
  return (
    <AuthLayouts title="Login">
      <FormLogin />
    </AuthLayouts>
  );
}
