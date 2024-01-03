"use client";
import { authOptions } from "@/lib/auth";
import {
  DropdownMenuCheckboxItem,
  DropdownMenuLabel,
} from "@radix-ui/react-dropdown-menu";
import { getServerSession } from "next-auth";
import { signOut } from "next-auth/react";
import React from "react";
import { Button, buttonVariants } from "./button";

export function SignoutButtonNavBar() {
  return (
    <DropdownMenuCheckboxItem
      className="relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
      onClick={() =>
        signOut({
          redirect: true,
          callbackUrl: "/",
        })
      }
    >
      Logout
    </DropdownMenuCheckboxItem>
  );
}
export function SignoutButton() {
  return (
    <Button variant="ghost" onClick={() => signOut()}>
      Logout
    </Button>
  );
}
