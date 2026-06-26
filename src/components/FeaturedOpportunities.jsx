import { getFeaturedOpportunities, getOpportunities } from "@/lib/actions/GetData";

import { Button } from "@heroui/react";
import { MoveRight } from "lucide-react";
import Link from "next/link";
import FeaturedOpportunityCard from "./FeaturedOpportunityCard";

export default async function FeaturedOpportunities() {
  const opportunitiesData = await getOpportunities()

  const opportunities = opportunitiesData.slice(0, 3);

  return (
    <section className="w-11/12 mx-auto px-4 py-20">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold">
          Featured Opportunities
        </h2>

        <p className="text-default-500 mt-3 max-w-2xl mx-auto mb-8">
          Explore the latest opportunities posted by innovative startups
          and find your next exciting role.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {opportunities.map((opportunity) => (
          <FeaturedOpportunityCard
            key={opportunity._id}
            opportunity={opportunity}
          />
        ))}
      </div>

      <Link href="/opportunities">
        <Button className="mt-5" variant="ghost">
          <div className="flex items-center gap-2">
            <span>View All Opportunities</span>
            <MoveRight size={18} />
          </div>
        </Button>
      </Link>
    </section>
  );
}