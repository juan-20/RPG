import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import React from "react";

const Profile = async () => {
  const session = await getServerSession(authOptions);

  if (!session) {
    return <div>Parece que você não esta conectado...</div>;
  }
  return <div>Bem vindo, {session?.user.username}</div>;
};

export default Profile;
