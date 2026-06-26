"use client";

import { Card } from "@heroui/react";
import {
  Rocket,
  BriefcaseBusiness,
  Users,
  Handshake,
  Trophy,
  TrendingUp,
} from "lucide-react";

const features = [
  {
    title: "Launch Your Startup",
    description:
      "Create your startup profile, showcase your vision, and attract talented people who believe in your mission.",
    icon: Rocket,
  },
  {
    title: "Find Opportunities",
    description:
      "Explore internships, part-time, contract, and full-time roles offered by innovative startups.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Connect with Innovators",
    description:
      "Network with founders, developers, designers, marketers, and entrepreneurs from diverse industries.",
    icon: Users,
  },
  {
    title: "Collaborate & Grow",
    description:
      "Build meaningful partnerships, work on exciting projects, and turn great ideas into successful businesses.",
    icon: Handshake,
  },
  {
    title: "Gain Recognition",
    description:
      "Showcase your startup achievements and build credibility within the StartupForge community.",
    icon: Trophy,
  },
  {
    title: "Scale Faster",
    description:
      "Discover opportunities, recruit talented people, and accelerate your startup's growth journey.",
    icon: TrendingUp,
  },
];

export default function WhyJoinStartupForge() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className="text-primary font-semibold uppercase tracking-wider">
            Why StartupForge?
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-3">
            Why Join StartupForge?
          </h2>

          <p className="text-default-500 mt-5 text-lg mb-10">
            Whether you're a founder looking for talented people or a
            professional searching for exciting startup opportunities,
            StartupForge connects ambitious minds to build the future together.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <Card
                key={index}
                className="p-8 rounded-3xl border border-default-200 hover:border-primary hover:-translate-y-2 transition-all duration-300 shadow-sm hover:shadow-xl"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                  <Icon className="w-7 h-7 text-primary" />
                </div>

                <h3 className="text-2xl font-semibold mb-3">
                  {feature.title}
                </h3>

                <p className="text-default-500 leading-relaxed">
                  {feature.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}