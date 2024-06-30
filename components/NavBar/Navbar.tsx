import { FC } from "react";

import {
  Menubar,
  MenubarContent,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";

export const Navbar: FC = () => {
  return (
    <Menubar className="p-4 flex justify-between items-center">
      <MenubarMenu>
        <MenubarTrigger>Great Heights</MenubarTrigger>
        <MenubarContent></MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>Edit</MenubarTrigger>
        <MenubarContent></MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>View</MenubarTrigger>
        <MenubarContent></MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>Profiles</MenubarTrigger>
        <MenubarContent></MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
};
export default Navbar;
