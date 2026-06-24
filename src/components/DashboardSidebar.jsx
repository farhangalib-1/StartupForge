"use client"
import {Bars, Bell, Envelope, Gear, House, Magnifier, Person} from "@gravity-ui/icons";
import {Button, Drawer} from "@heroui/react";
import Link from "next/link";
import {
  LayoutDashboard,
  Building2,
  PlusCircle,
  BriefcaseBusiness,
  ClipboardList,
  UserCircle,
  Users,
  Rocket,
  CreditCard,
} from "lucide-react";
import { authClient } from "@/lib/auth-client";

export function DashboardSidebar() {
    const dashboardItems = {
  Founder: [
    {
      name: "Overview",
      href: "/dashboard/Founder",
      icon: LayoutDashboard,
    },
    {
      name: "My Startup",
      href: "/dashboard/my-startup",
      icon: Building2,
    },
    {
      name: "Add Opportunity",
      href: "/dashboard/add-opportunity",
      icon: PlusCircle,
    },
    {
      name: "Manage Opportunities",
      href: "/dashboard/manage-opportunities",
      icon: BriefcaseBusiness,
    },
    {
      name: "Applications",
      href: "/dashboard/applications",
      icon: ClipboardList,
    },
  ],

  Collaborator: [
    {
      name: "Overview",
      href: "/dashboard/Collaborator",
      icon: LayoutDashboard,
    },
    {
      name: "My Applications",
      href: "/dashboard/my-applications",
      icon: ClipboardList,
    },
    {
      name: "Profile",
      href: "/dashboard/profile",
      icon: UserCircle,
    },
  ],

  Admin: [
    {
      name: "Overview",
      href: "/dashboard/Admin",
      icon: LayoutDashboard,
      
    },
    {
      name: "Manage Users",
      href: "/dashboard/manage-users",
      icon: Users,
    },
    {
      name: "Manage Startups",
      href: "/dashboard/manage-startups",
      icon: Rocket,
    },
    {
      name: "Transactions",
      href: "/dashboard/transactions",
      icon: CreditCard,
    },
  ],
};
 const { data: session } = authClient.useSession();
 const role = session?.user?.role;
  const navItems = dashboardItems[role] || dashboardItems["Founder"]

  return (
    <Drawer>
        <nav className="flex flex-col gap-1 hidden md:block border w-60">
         <Link href="/" className="text-2xl font-black tracking-tight">
         <h1 className="w-full text-center mt-4 mb-10">
                    Startup<span className="text-blue-600">Forge</span>
                    </h1>
                  </Link>
                {navItems.map((item) => (
                <Link key={item.name} href={item.href}>
                  <button
                    
                    className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-foreground transition-colors hover:bg-default w-full"
                    type="button"

                  >
                    <item.icon className="size-5 text-muted" />
                    {item.name}
                  </button>
                  </Link>
                ))}
    </nav>
      <Button variant="secondary" className="md:hidden">
        <Bars />
        Menu
      </Button>
      
      <Drawer.Backdrop>
        <Drawer.Content placement="left">
          <Drawer.Dialog>
            <Drawer.CloseTrigger />
            <Drawer.Header>
              <Drawer.Heading>Navigation</Drawer.Heading>
            </Drawer.Header>
            <Drawer.Body>
             <nav className="flex flex-col gap-1 hidden md:block border w-60">
         <Link href="/" className="text-2xl font-black tracking-tight">
         <h1 className="w-full text-center mb-10">
                    Startup<span className="text-blue-600">Forge</span>
                    </h1>
                  </Link>
                {navItems.map((item) => (
                  <button
                    key={item.name}
                    className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-foreground transition-colors hover:bg-default w-full"
                    type="button"

                  >
                    <item.icon className="size-5 text-muted" />
                    {item.name}
                  </button>
                ))}
    </nav>
            </Drawer.Body>
          </Drawer.Dialog>
        </Drawer.Content>
      </Drawer.Backdrop>
    </Drawer>
  );
}