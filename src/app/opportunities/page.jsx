import { getOpportunities } from "@/lib/actions/GetData";
import FeaturedOpportunityCard from "@/components/FeaturedOpportunityCard";

export default async function BrowseOpportunitiesPage() {
  const opportunities = await getOpportunities();

  return (
    <main className="max-w-7xl mx-auto px-4 py-12 mb-10">
      {/* Hero */}
      <section className="text-center max-w-3xl mx-auto">
        <h1 className="text-5xl font-bold tracking-tight">
          Featured Opportunities
        </h1>

        <p className="mt-4 text-default-500 text-lg">
          Discover the latest opportunities posted by approved startups.
          Explore exciting roles, required skills, and apply to become part
          of the next generation of innovative companies.
        </p>
      </section>

      {/* Total */}
      <div className="mt-12">
        <p className="text-default-500">
          Showing{" "}
          <span className="font-semibold text-foreground">
            {opportunities.length}
          </span>{" "}
          available opportunities
        </p>
      </div>

      {/* Grid */}
      <section className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {opportunities.map((opportunity) => (
          <FeaturedOpportunityCard
            key={opportunity._id}
            opportunity={opportunity}
          />
        ))}
      </section>

      {/* Empty State */}
      {opportunities.length === 0 && (
        <div className="text-center py-24">
          <h2 className="text-2xl font-semibold">
            No opportunities available
          </h2>

          <p className="mt-2 text-default-500">
            Check back later for newly posted startup opportunities.
          </p>
        </div>
      )}
    </main>
  );
}