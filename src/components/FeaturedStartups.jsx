import { getFeaturedStartups } from "@/lib/actions/GetData";
import FeaturedStartupCard from "./FeaturedStartupCard";


export default async function FeaturedStartups() {
  const startups = await getFeaturedStartups();

  return (
    <section className="w-11/12 mx-auto px-4 py-20">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold">
          Featured Startups
        </h2>
        <p className="text-default-500 mt-3 max-w-2xl mx-auto">
          Explore the latest admin-approved startups submitted by
          passionate founders across different industries.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {startups.map((startup) => (
          <FeaturedStartupCard
            key={startup._id}
            startup={startup}
          />
        ))}
      </div>
    </section>
  );
}