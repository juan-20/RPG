import { useTheme } from "next-themes";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-4xl">Pagina inicial</h1>
      <br />
      <Link href="/profile">Perfil</Link>
    </div>
  );
}
