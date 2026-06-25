"use client"
import Link from "next/link";
import { Button, Card, Chip } from "@heroui/react";
import { CheckCircle2, Rocket, ArrowRight } from "lucide-react";

export default function SuccessPage() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-16 bg-default-50">
      <Card className="max-w-2xl w-full rounded-3xl shadow-xl border border-success/20">
        <Card.Content className="p-10 text-center">

          <div className="flex justify-center">
            <div className="w-24 h-24 rounded-full bg-success/10 flex items-center justify-center">
              <CheckCircle2 className="w-14 h-14 text-success" />
            </div>
          </div>

          <Chip
            color="success"
            variant="flat"
            className="mt-6"
          >
            Payment Successful
          </Chip>

          <h1 className="text-4xl font-bold mt-6">
            Welcome to Founder Pro 🎉
          </h1>

          <p className="text-default-500 text-lg mt-4 leading-8">
            Your subscription has been activated successfully.
            You can now post unlimited opportunities and access all
            premium StartupForge features.
          </p>

          <div className="mt-10 rounded-2xl border border-default-200 p-6 text-left space-y-4">

            <div className="flex items-center gap-3">
              <CheckCircle2 className="text-success" size={20} />
              Unlimited Opportunity Posts
            </div>

            <div className="flex items-center gap-3">
              <CheckCircle2 className="text-success" size={20} />
              Verified Founder Badge
            </div>

            <div className="flex items-center gap-3">
              <CheckCircle2 className="text-success" size={20} />
              Featured Startup Listing
            </div>

            <div className="flex items-center gap-3">
              <CheckCircle2 className="text-success" size={20} />
              Premium Analytics
            </div>

            <div className="flex items-center gap-3">
              <CheckCircle2 className="text-success" size={20} />
              Priority Support
            </div>

          </div>

          <div className="flex flex-col sm:flex-row gap-4 mt-10">

            <Link  href="/dashboard/add-opportunity">
            <Button
             
              color="success"
              className="flex-1"
              size="lg"
              startContent={<Rocket size={18} />}
            >
              Post Opportunity
            </Button>
            </Link>

            <Link href="/dashboard/Founder">
            <Button
              variant="bordered"
              className="flex-1"
              size="lg"
              endContent={<ArrowRight size={18} />}
            >
              Go to Dashboard
            </Button>
            </Link>

          </div>

        </Card.Content>
      </Card>
    </section>
  );
}