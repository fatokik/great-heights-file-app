"use client";
import { FC } from "react";

import { RocketIcon, AccessibilityIcon, RowsIcon } from "@radix-ui/react-icons";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

export const Navbar: FC = () => {
  return (
    <div className="w-full border-b border-gray-300 h-12 flex flex-row justify-between px-6">
      <div className="flex flex-row gap-4 justify-center items-center">
        <RocketIcon className="h-8 w-8 " />
        <p className="font-bold">Great Heights</p>
        <RowsIcon className="h-4 w-4" />
      </div>

      <div className="flex flex-row gap-5 items-center">
        <AccessibilityIcon className="h-6 w-6" />
        <Avatar className="h-89 w-9">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
};
export default Navbar;
