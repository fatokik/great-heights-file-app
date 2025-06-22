import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/src/components/ui/sidebar";

import {
  HomeIcon,
  PersonIcon,
  FileIcon,
  MagnifyingGlassIcon,
  GearIcon,
} from "@radix-ui/react-icons";

export const AppSidebar: React.FC = () => {
  const items = [
    { title: "Home", url: "/", icon: <HomeIcon className="h-6 w-6" /> },
    {
      title: "File Catalogue",
      url: "file-catalogue",
      icon: <FileIcon className="h-6 w-6" />,
    },
    {
      title: "Admin",
      url: "admin",
      icon: <PersonIcon className="h-6 w-6" />,
    },
    {
      title: "Search",
      url: "#",
      icon: <MagnifyingGlassIcon className="h-6 w-6" />,
    },
    { title: "Settings", url: "#", icon: <GearIcon className="h-6 w-6" /> },
  ];

  return (
    <Sidebar className="relative" collapsible="icon">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      {item.icon}
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
};
export default AppSidebar;
