import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import Link from "next/link";
import React from "react";

const Profile = async () => {
  const session = await getServerSession(authOptions);

  if (!session) {
    return <div>Parece que você não esta conectado...</div>;
  }
  return (
    <div>
      <p>Bem vindo, {session?.user.username}</p>
      <p>Seu email é {session?.user.email}</p>
      <p>Seu id é {session?.user.id}</p>

      <Link href="/character/create">cRIAR PERSONAGEM</Link>
    </div>
  );
};

export default Profile;
