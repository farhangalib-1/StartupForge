import DashboardNavbar from "@/components/DashboardNavbar";
import { DashboardSidebar } from "@/components/DashboardSidebar";


export default function DashboardLayout({
children,
}) {
return ( 

<div className="flex min-h-screen bg-slate-50"> <DashboardSidebar />

  <div className="flex flex-1 flex-col">
    <DashboardNavbar />

    <main className="flex-1 p-6">
      {children}
    </main>
  </div>
</div>


);
}
