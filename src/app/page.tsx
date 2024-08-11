import Link from "next/link";
export default function Home() {
  return (
    <main>
      <Link href={"/login"}>login page</Link>
    </main>
  );
}
