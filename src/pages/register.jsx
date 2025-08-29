import FormRegister from "../components/Fragments/FormRegister";
import AuthLayouts from "../components/layouts/AuthLayouts";

export default function RegisterPage() {
  return (
    <AuthLayouts title="Register">
      <FormRegister />
    </AuthLayouts>
  );
}
