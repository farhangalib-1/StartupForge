"use client";

import { Card, Chip } from "@heroui/react";
import { Users, Trophy, ArrowUpRight } from "lucide-react";
import {Rocket} from '@gravity-ui/icons';
const stories = [
  {
    title: "TechNova",
    badge: "AI Startup",
    icon: Rocket,
    color: "from-violet-500 to-fuchsia-500",
    description:
      "TechNova connected with talented developers through StartupForge and launched its AI-powered productivity platform in just four months.",
    result: "Raised $500K Seed Funding",
  },
  {
    title: "HealthSync",
    badge: "HealthTech",
    icon: Users,
    color: "from-cyan-500 to-blue-500",
    description:
      "HealthSync built a complete healthcare team and successfully launched a telemedicine platform serving thousands of users.",
    result: "10,000+ Active Users",
  },
  {
    title: "EduSpark",
    badge: "EdTech",
    icon: Trophy,
    color: "from-amber-500 to-orange-500",
    description:
      "EduSpark found passionate educators and developers to build an interactive learning platform for modern students.",
    result: "Best Startup Award 2025",
  },
];

export default function SuccessStories() {
  return (
    <section className="py-24 px-6 mb-10"> 
      <div className="max-w-7xl mx-auto">

        {/* Heading */}

        <div className="text-center max-w-3xl mx-auto mb-16">

          <Chip color="primary" variant="flat">
            Success Stories
          </Chip>

          <h2 className="text-5xl font-black mt-5">
            Turning Great Ideas into
            <span className="bg-gradient-to-r from-violet-600 to-fuchsia-600 bg-clip-text text-transparent">
              {" "}
              Successful Startups
            </span>
          </h2>

          <p className="text-default-500 text-lg mt-6 leading-8">
            Discover how founders and collaborators used StartupForge to
            transform innovative ideas into thriving businesses.
          </p>

        </div>

        {/* Cards */}

        <div className="grid w-full grid-cols-1 md:grid-cols-3 gap-8">

          {stories.map((story, index) => {
            const Icon = story.icon;

            return (
              <Card
                key={index}
                className="group rounded-3xl overflow-hidden border border-default-200 hover:-translate-y-3 hover:shadow-2xl transition-all duration-500"
              >
                <div
                  className={`h-2 bg-gradient-to-r ${story.color}`}
                />

                <Card.Header className="flex flex-col items-start gap-5 p-8">

                 <div
  className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r ${story.color} shadow-lg`}
>
  <Icon
    className="h-8 w-8 text-white"
    strokeWidth={2.2}
  />
</div>

                  <div>

                    <Chip variant="flat">
                      {story.badge}
                    </Chip>

                    <Card.Title className="text-3xl font-bold mt-4">
                      {story.title}
                    </Card.Title>

                    <Card.Description className="text-base leading-7 mt-3">
                      {story.description}
                    </Card.Description>

                  </div>

                </Card.Header>

                <Card.Content className="px-8 pb-8">

                  <div className="rounded-2xl bg-default-100 p-5">

                    <p className="text-sm text-default-500">
                      Achievement
                    </p>

                    <div className="flex items-center justify-between mt-2">

                      <h4 className="font-bold text-lg">
                        {story.result}
                      </h4>

                      <ArrowUpRight className="text-success" />

                    </div>

                  </div>

                </Card.Content>

              </Card>
            );
          })}

        </div>

      </div>
    </section>
  );
}