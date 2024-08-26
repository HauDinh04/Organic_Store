import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div
      className="h-screen flex justify-center items-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: 'url("/bg-signUp.jpg")' }}
    >
      <SignUp />
    </div>
  );
}
