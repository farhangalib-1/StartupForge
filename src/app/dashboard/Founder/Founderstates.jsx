import {
  BriefcaseBusiness,
  Users,
  BadgeCheck,
} from "lucide-react";

const FounderStates = () => {
  const stats = [
    {
      title: "Total Opportunities",
      value: 0,
      icon: BriefcaseBusiness,
      bg: "bg-indigo-100",
      color: "text-indigo-600",
    },
    {
      title: "Total Applications",
      value: 0,
      icon: Users,
      bg: "bg-purple-100",
      color: "text-purple-600",
    },
    {
      title: "Accepted Members",
      value: 0,
      icon: BadgeCheck,
      bg: "bg-emerald-100",
      color: "text-emerald-600",
    },
  ];

  return (
    <div className="grid gap-6 md:grid-cols-3">
      {stats.map((item) => {
        const Icon = item.icon;

        return (
          <div
            key={item.title}
            className="flex items-center gap-5 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm"
          >
            <div
              className={`flex h-16 w-16 items-center justify-center rounded-2xl ${item.bg}`}
            >
              <Icon className={`h-8 w-8 ${item.color}`} />
            </div>

            <div>
              <h2 className="text-5xl font-bold text-slate-900">
                {item.value}
              </h2>

              <p className="mt-2 text-lg text-slate-500">
                {item.title}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FounderStates;