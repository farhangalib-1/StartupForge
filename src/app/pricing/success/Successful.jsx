"use client"
import React from 'react'
import Link from "next/link";
import { Card, Button, Chip } from "@heroui/react";
import { CheckCircle2, Crown, ArrowRight } from "lucide-react";
const Successful = () => {
  return (
   <section className="min-h-screen flex items-center justify-center bg-default-50 px-6 py-16">
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

          <p className="mt-4 text-default-500 text-lg">
            Your subscription has been activated successfully.
          </p>

          <div className="mt-8 rounded-2xl border border-default-200 bg-default-100 p-5">

            <div className="flex items-center justify-center gap-3">
              <Crown className="text-warning" />
              <span className="font-semibold">
                Founder Pro Membership Active
              </span>
            </div>
          </div>

          <div className="mt-10 space-y-3 text-left">

            <div className="flex gap-3">
              <CheckCircle2 className="text-success mt-1" size={18} />
              <span>Unlimited opportunity posts</span>
            </div>

            <div className="flex gap-3">
              <CheckCircle2 className="text-success mt-1" size={18} />
              <span>Verified Founder Badge</span>
            </div>

            <div className="flex gap-3">
              <CheckCircle2 className="text-success mt-1" size={18} />
              <span>Featured startup listing</span>
            </div>

            <div className="flex gap-3">
              <CheckCircle2 className="text-success mt-1" size={18} />
              <span>Premium analytics & priority support</span>
            </div>

          </div>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">

            <Button
              as={Link}
              href="/dashboard/add-opportunity"
              color="success"
              className="flex-1"
            >
              Post an Opportunity
            </Button>

            <Button
              as={Link}
              href="/dashboard"
              variant="bordered"
              className="flex-1"
              endContent={<ArrowRight size={18} />}
            >
              Go to Dashboard
            </Button>

          </div>

        </Card.Content>

      </Card>
    </section>
  )
}

export default Successful
