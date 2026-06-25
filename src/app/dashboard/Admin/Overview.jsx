"use client";

import { Card, Chip } from "@heroui/react";
import {
  Users,
  Rocket,
  BriefcaseBusiness,
  DollarSign,
  TrendingUp,
} from "lucide-react";

export default function Overview({
  totalUsers,
  totalStartups,
  totalOpportunities,
  totalRevenue,
}) {
  const stats = [
    {
      title: "Total Users",
      value: totalUsers,
      icon: Users,
      color: "text-blue-600",
      bg: "bg-blue-50",
    },
    {
      title: "Total Startups",
      value: totalStartups,
      icon: Rocket,
      color: "text-violet-600",
      bg: "bg-violet-50",
    },
    {
      title: "Total Opportunities",
      value: totalOpportunities,
      icon: BriefcaseBusiness,
      color: "text-emerald-600",
      bg: "bg-emerald-50",
    },
    {
      title: "Total Revenue",
      value: `$${totalRevenue*9.99}`,
      icon: DollarSign,
      color: "text-amber-600",
      bg: "bg-amber-50",
    },
  ];

  return (
    <section className="space-y-8">

      {/* Welcome */}
      <div>
        <Chip color="primary" variant="flat">
          Admin Dashboard
        </Chip>

        <h1 className="text-4xl font-bold mt-4">
          Welcome back, Admin 👋
        </h1>

        <p className="text-default-500 mt-3 max-w-3xl leading-7">
          Here's an overview of your StartupForge platform. Monitor user
          growth, startup activity, opportunities, and subscription revenue
          from one place.
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

        {stats.map((item) => {
          const Icon = item.icon;

          return (
            <Card
              key={item.title}
              className="border border-default-200 rounded-3xl shadow-sm hover:shadow-lg transition-all"
            >
              <Card.Content className="p-6">

                <div className="flex justify-between items-start">

                  <div>
                    <p className="text-default-500 text-sm">
                      {item.title}
                    </p>

                    <h2 className="text-4xl font-bold mt-3">
                      {item.value}
                    </h2>

                    <div className="flex items-center gap-2 mt-5 text-success text-sm font-medium">
                      <TrendingUp size={16} />
                      Platform Analytics
                    </div>
                  </div>

                  <div
                    className={`w-14 h-14 rounded-2xl flex items-center justify-center ${item.bg}`}
                  >
                    <Icon
                      size={28}
                      className={item.color}
                    />
                  </div>

                </div>

              </Card.Content>
            </Card>
          );
        })}

      </div>

    </section>
  );
}