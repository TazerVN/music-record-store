import { LoginForm } from "@/components/login-form";

export default function LoginPage() {
  return (
    <div className="flex flex-col items-center gap-6">
      <div className="flex flex-col items-start gap-6 ">
        <LoginForm />
      </div>
    </div>
  );
}
