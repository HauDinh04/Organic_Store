import { SignIn } from "@clerk/nextjs";
import Image from "next/image";

export default function Page() {
  return (
    <div className="h-screen flex justify-center items-center bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url("/bg-signUp.jpg")' }}>
 
    <SignIn />
  </div>
  );
}
