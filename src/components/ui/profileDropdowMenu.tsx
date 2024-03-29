"use client";

import * as React from "react";
import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTheme } from "next-themes";
import { SignoutButtonNavBar } from "./signoutButton";
import User from "./user";
import Image from 'next/image'

type Checked = DropdownMenuCheckboxItemProps["checked"];

export function ProfileDropdowMenu({ user}: any) {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  const [showStatusBar, setShowStatusBar] = React.useState<Checked>(true);
  const [showActivityBar, setShowActivityBar] = React.useState<Checked>(false);
  const [showPanel, setShowPanel] = React.useState<Checked>(false);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">
          {user.username}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>
          <User />
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <SignoutButtonNavBar />
        <DropdownMenuCheckboxItem
          checked={showPanel}
          onClick={() =>
            theme == "dark" ? setTheme("light") : setTheme("dark")
          }
          onCheckedChange={setShowPanel}
        >
          Toggle Mode
        </DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
