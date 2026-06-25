"use client";

import { useEffect, useState } from "react";
import { Bell } from "lucide-react";
import { Avatar } from "@heroui/react";
import { authClient } from "@/lib/auth-client";

const DashboardNavbar = () => {
  const { data: session } = authClient.useSession();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <header className="flex h-16 items-center justify-between border-b bg-white px-6">
      <h1 className="text-xl font-semibold">Dashboard</h1>

      <div className="flex items-center gap-4">
        <button className="rounded-full p-2 hover:bg-slate-100">
          <Bell size={20} />
        </button>

        {mounted && (
          <img
            src={session?.user?.image}
            alt={session?.user?.name ?? "User"}
            className="w-10 h-10 rounded-full"
          />
        )}
      </div>
    </header>
  );
};

export default DashboardNavbar;