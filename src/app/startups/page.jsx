import { Description, Input, Label, ListBox, Select } from "@heroui/react";
import { Search } from "lucide-react";
import { getFeaturedStartups } from "@/lib/actions/GetData";
import FeaturedStartupCard from "@/components/FeaturedStartupCard";

export default async function BrowseStartupsPage() {
  const startups = await getFeaturedStartups();

  return (
    <main className="max-w-7xl mx-auto px-4 py-12 mb-10">
      {/* Hero */}
      <section className="text-center max-w-3xl mx-auto">
        <h1 className="text-5xl font-bold tracking-tight">
          Browse Startups
        </h1>

        <p className="mt-4 text-default-500 text-lg">
          Discover innovative startups approved by our administrators.
          Explore founders, industries, and inspiring business ideas from
          around the community.
        </p>
      </section>

      {/* Filters */}
      <section className="mt-12 flex flex-col md:flex-row gap-4">
  <Input
    placeholder="Search startups..."
    className="flex-1"
  />

  <Select className="w-full md:w-72">
    <Label>Industry</Label>

    <Select.Trigger>
      <Select.Value placeholder="All Industries" />
      <Select.Indicator />
    </Select.Trigger>

    <Description>
      Filter startups by industry
    </Description>

    <Select.Popover>
      <ListBox>
        <ListBox.Item id="all">
          <Label>All Industries</Label>
        </ListBox.Item>

        <ListBox.Item id="ai">
          <Label>Artificial Intelligence</Label>
        </ListBox.Item>

        <ListBox.Item id="fintech">
          <Label>FinTech</Label>
        </ListBox.Item>

        <ListBox.Item id="health">
          <Label>HealthTech</Label>
        </ListBox.Item>

        <ListBox.Item id="education">
          <Label>Education</Label>
        </ListBox.Item>

        <ListBox.Item id="ecommerce">
          <Label>E-commerce</Label>
        </ListBox.Item>

        <ListBox.Item id="agriculture">
          <Label>Agriculture</Label>
        </ListBox.Item>

        <ListBox.Item id="cybersecurity">
          <Label>Cybersecurity</Label>
        </ListBox.Item>

        <ListBox.Item id="saas">
          <Label>SaaS</Label>
        </ListBox.Item>
      </ListBox>
    </Select.Popover>
  </Select>
</section>

      {/* Total */}
      <div className="mt-8">
        <p className="text-default-500">
          Showing{" "}
          <span className="font-semibold text-foreground">
            {startups.length}
          </span>{" "}
          approved startups
        </p>
      </div>

      {/* Grid */}
      <section className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {startups.map((startup) => (
          <FeaturedStartupCard
            key={startup._id}
            startup={startup}
          />
        ))}
      </section>

      {/* Empty State */}
      {startups.length === 0 && (
        <div className="text-center py-24">
          <h2 className="text-2xl font-semibold">
            No approved startups found
          </h2>

          <p className="mt-2 text-default-500">
            Check back later to discover newly approved startups.
          </p>
        </div>
      )}
    </main>
  );
}