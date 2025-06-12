"use client";
import { FC } from "react";

import {
  RocketIcon,
  AccessibilityIcon,
  RowsIcon,
  EyeOpenIcon,
  PinTopIcon,
  PersonIcon,
  FileTextIcon,
} from "@radix-ui/react-icons";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import Link from "next/link";
import { SidebarTrigger } from "../ui/sidebar";

type NavbarProps = {
  children?: React.ReactNode;
};

export const Navbar: FC<NavbarProps> = ({ children }) => {
  return (
    <div className="w-full border-b border-gray-300 h-12 flex flex-row justify-between px-4">
      <div className="flex flex-row gap-4 justify-center items-center">
        <Link href="/">
          <RocketIcon className="h-8 w-8 text-blue-300" />
        </Link>
        <p className="font-bold">Great Heights</p>
        <SidebarTrigger />
      </div>
      <div className="flex items-center space-x-4">{children}</div>
      <div className="flex flex-row gap-5 items-center">
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="ghost" size="icon">
              <AccessibilityIcon className="h-6 w-6" />
            </Button>
          </PopoverTrigger>

          <PopoverContent>
            <p>
              For any help regarding this application, please reach out to
              [\`test@great-heights.com\`]
            </p>
          </PopoverContent>
        </Popover>
        <Avatar className="h-89 w-9">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>KF</AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
};
export default Navbar;
