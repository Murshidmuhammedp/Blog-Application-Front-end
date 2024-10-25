import userAuth from "@/zustand/useAuth";
import Image from "next/image";
import HomePage from "./(auth)/homepage/page";

export default function Home() {

  return (
    <div >
      <HomePage />
    </div>
  );
}
