import { useSession } from "next-auth/react";
import React from "react";

function User() {
  const { data: session } = useSession();
  return <pre>{session?.user.username}</pre>;
}

export default User;
