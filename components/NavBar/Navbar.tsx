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

export const Navbar: FC = () => {
  return (
    <div className="w-full border-b border-gray-300 h-12 flex flex-row justify-between px-4">
      <div className="flex flex-row gap-4 justify-center items-center">
        <Link href="/">
          <RocketIcon className="h-8 w-8 text-blue-300" />
        </Link>
        <p className="font-bold">Great Heights</p>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon">
              <RowsIcon className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>

          <DropdownMenuContent className="w-40">
            <DropdownMenuGroup>
              <Link href="file-catalogue">
                <DropdownMenuItem>
                  File Catalogue
                  <DropdownMenuShortcut>
                    <FileTextIcon />
                  </DropdownMenuShortcut>
                </DropdownMenuItem>
              </Link>

              <Link href="file-upload">
                <DropdownMenuItem>
                  File Upload
                  <DropdownMenuShortcut>
                    <PinTopIcon />
                  </DropdownMenuShortcut>
                </DropdownMenuItem>
              </Link>

              <Link href="admin">
                <DropdownMenuItem>
                  Admin
                  <DropdownMenuShortcut>
                    <PersonIcon />
                  </DropdownMenuShortcut>
                </DropdownMenuItem>
              </Link>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

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
