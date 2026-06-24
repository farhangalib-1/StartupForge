"use client"
import {Bars, Bell, Envelope, Gear, House, Magnifier, Person} from "@gravity-ui/icons";
import {Button, Drawer} from "@heroui/react";
import Link from "next/link";
import {
  LayoutDashboard,
  Rocket,
  Users,
  FileCheck,
  UserCheck,
  Search,
  Briefcase,
  ClipboardList,
  User,
  Shield,
  CreditCard,
  Flag,
} from "lucide-react";
import { authClient } from "@/lib/auth-client";

export function DashboardSidebar() {
    const dashboardItems = {
  Founder: [
    {
      name: "Dashboard",
      href: "/dashboard",
      icon: LayoutDashboard,
    },
    {
      name: "Create Startup Profile",
      href: "/dashboard/create-startup",
      icon: Rocket,
    },
    {
      name: "Post Team Requirements",
      href: "/dashboard/team-requirements",
      icon: Users,
    },
    {
      name: "Review Applications",
      href: "/dashboard/review-applications",
      icon: FileCheck,
    },
    {
      name: "Accept / Reject Applicants",
      href: "/dashboard/manage-applicants",
      icon: UserCheck,
    },
  ],

  Collaborator: [
    {
      name: "Dashboard",
      href: "/dashboard",
      icon: LayoutDashboard,
    },
    {
      name: "Browse Startups",
      href: "/dashboard/startups",
      icon: Search,
    },
    {
      name: "Apply to Join Teams",
      href: "/dashboard/opportunities",
      icon: Briefcase,
    },
    {
      name: "Track Application Status",
      href: "/dashboard/applications",
      icon: ClipboardList,
    },
    {
      name: "Personal Profile",
      href: "/dashboard/profile",
      icon: User,
    },
  ],

  Admin: [
    {
      name: "Dashboard",
      href: "/dashboard",
      icon: LayoutDashboard,
    },
    {
      name: "Manage Users",
      href: "/dashboard/manage-users",
      icon: Users,
    },
    {
      name: "Manage Startup Posts",
      href: "/dashboard/manage-startups",
      icon: Rocket,
    },
    {
      name: "View Transactions",
      href: "/dashboard/transactions",
      icon: CreditCard,
    },
    {
      name: "Moderate Activities",
      href: "/dashboard/moderation",
      icon: Shield,
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