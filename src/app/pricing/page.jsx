"use client";

import { Card, Button, Chip } from "@heroui/react";
import {
  Check,
  Crown,
  Rocket,
  Sparkles,
} from "lucide-react";

export default function FounderPricing() {
  return (
    <section className="max-w-7xl mx-auto py-20 px-6">

      <div className="text-center mb-16">

        <h2 className="text-5xl font-bold mt-5">
          Simple Pricing for Founders
        </h2>

        <p className="text-default-500 mt-4 text-lg max-w-2xl mx-auto">
          Start for free and upgrade when your startup starts hiring.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">

        {/* Free */}
        <Card className="rounded-3xl border border-default-200">
          <Card.Content className="p-10">

            <div className="flex items-center gap-3">
              <Rocket className="text-primary" />
              <h3 className="text-3xl font-bold">
                Free
              </h3>
            </div>

            <div className="mt-6">
              <span className="text-6xl font-bold">$0</span>
              <span className="text-default-500">
                /month
              </span>
            </div>

            <p className="text-default-500 mt-5">
              Perfect for validating your startup idea.
            </p>

            <div className="space-y-4 mt-10">

              {[
                "3 Opportunity Posts",
                "1 Startup Profile",
                "Applicant Management",
                "Community Support",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3"
                >
                  <Check size={18} className="text-success" />
                  <span>{item}</span>
                </div>
              ))}

            </div>

            <Button
              className="w-full mt-10"
              variant="bordered"
              size="lg"
            >
              Current Plan
            </Button>

          </Card.Content>
        </Card>

        {/* Pro */}
        <Card className="rounded-3xl border-2 border-primary relative shadow-xl">

          <Chip
            color="secondary"
            className="absolute right-6 top-6"
          >
            Most Popular
          </Chip>

          <Card.Content className="p-10">

            <div className="flex items-center gap-3">
              <Crown className="text-warning" />
              <h3 className="text-3xl font-bold">
                Founder Pro
              </h3>
            </div>

            <div className="mt-6">
              <span className="text-6xl font-bold">$9.99</span>
              <span className="text-default-500">
                /month
              </span>
            </div>

            <p className="text-default-500 mt-5">
              Everything you need to hire and grow your startup.
            </p>

            <div className="space-y-4 mt-10">

              {[
                "Unlimited Opportunity Posts",
                "Featured Startup",
                "Verified Founder Badge",
                "Unlimited Team Members",
                "Priority Listing",
                "Advanced Analytics",
                "Premium Support",
                "Early Access Features",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3"
                >
                  <Check
                    size={18}
                    className="text-success"
                  />
                  <span>{item}</span>
                </div>
              ))}

            </div>

            <Button
              size="lg"
              color="secondary"
              className="w-full mt-10"
              startContent={<Sparkles size={18} />}
            >
              Upgrade with Stripe
            </Button>

          </Card.Content>
        </Card>

      </div>
    </section>
  );
}