import { useAuthActions } from "@convex-dev/auth/react";
import { useQuery } from "convex/react";
import { ArrowUpRight, BarChart3, CreditCard, Crown, Home, LogOut, Settings } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { api } from "../../convex/_generated/api";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupContent, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem, useSidebar } from "./ui/sidebar";

const navItems = [
  { href: "/dashboard", label: "Overview", icon: Home },
  { href: "/cards", label: "Cards", icon: CreditCard },
  { href: "/transfers", label: "Transfers", icon: ArrowUpRight },
  { href: "/analytics", label: "Analytics", icon: BarChart3 },
  { href: "/premium", label: "Royal Tier", icon: Crown },
];

export function AppSidebar() {
  const location = useLocation();
  const user = useQuery(api.auth.currentUser);
  const { signOut } = useAuthActions();
  const { setOpenMobile } = useSidebar();

  return (
    <Sidebar>
      <SidebarHeader className="border-b border-sidebar-border">
        <Link to="/" onClick={() => setOpenMobile(false)} className="flex items-center gap-2.5 px-2 py-1 font-semibold text-lg">
          <div className="size-8 rounded-lg flex items-center justify-center" style={{ background: "linear-gradient(135deg, #FFD700, #E0BD00)" }}>
            <Crown className="size-4" style={{ color: "#0A0A0F" }} />
          </div>
          <span>Royal Bank</span>
        </Link>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {navItems.map(item => (
                <SidebarMenuItem key={item.href}>
                  <SidebarMenuButton asChild isActive={location.pathname === item.href}>
                    <Link to={item.href} onClick={() => setOpenMobile(false)}>
                      <item.icon /><span>{item.label}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="border-t border-sidebar-border">
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton size="lg">
                  <Avatar className="size-8"><AvatarFallback style={{ backgroundColor: "#FFD700", color: "#0A0A0F" }} className="text-sm font-medium">{user?.name?.charAt(0).toUpperCase() || "U"}</AvatarFallback></Avatar>
                  <div className="flex flex-col items-start text-left">
                    <span className="text-sm font-medium truncate">{user?.name || "User"}</span>
                    <span className="text-xs text-muted-foreground truncate">{user?.email}</span>
                  </div>
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent side="top" align="start" className="w-[--radix-dropdown-menu-trigger-width]">
                <DropdownMenuItem asChild><Link to="/settings" onClick={() => setOpenMobile(false)}><Settings className="size-4" /> Settings</Link></DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => signOut()} className="text-destructive focus:text-destructive focus:bg-destructive/10"><LogOut className="size-4" /> Sign out</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
