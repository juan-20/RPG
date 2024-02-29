/* eslint-disable react-hooks/rules-of-hooks */

import Link from "next/link";
import { Button, buttonVariants } from "./ui/button";
import { HandMetal, Sword } from "lucide-react";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import React from "react";
import { ProfileDropdowMenu } from "./ui/profileDropdowMenu";

const Navbar = async () => {
  const session = await getServerSession(authOptions);
  return (
    <nav className=" bg-zinc-100 py-2 border-b border-s-zinc-200 h-14 w-full top-0">
      <div className="container flex items-center justify-between">
        <Link href="/">
          <Sword className="stroke-amber-400" />
        </Link>
        {session?.user ? (
          <ProfileDropdowMenu user={session.user} session={session} image={session.user.image} />
        ) : (
          <Link className={buttonVariants()} href="/sign-in">
            Sign in
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
