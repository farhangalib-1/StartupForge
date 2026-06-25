"use client";

import { Card, Chip, Button } from "@heroui/react";
import {
  BriefcaseBusiness,
  CalendarDays,
  Clock3,
  CircleDot,
} from "lucide-react";

export default function OpportunityCard({ opportunity }) {
  const {
    roleTitle,
    requiredSkills,
    workType,
    commitment,
    applicationDeadline,
    status,
  } = opportunity;

  return (
    <Card className="rounded-3xl border border-default-200 shadow-sm hover:shadow-lg transition-all duration-300">
      <Card.Content className="p-6 space-y-6">

        {/* Header */}
        <div className="flex items-start justify-between">
          <div>
            <h2 className="text-2xl font-bold">
              {roleTitle}
            </h2>

            <p className="text-default-500 mt-1">
              Startup Opportunity
            </p>
          </div>

          <Chip
            color="warning"
            variant="flat"
            
          >
            {status}
          </Chip>
        </div>

        {/* Skills */}
        <div>
          <h3 className="text-sm font-semibold text-default-600 mb-3">
            Required Skills
          </h3>

          <div className="flex flex-wrap gap-2">
            {requiredSkills?.map((skill) => (
              <Chip
                key={skill}
                color="secondary"
                variant="flat"
              >
                {skill}
              </Chip>
            ))}
          </div>
        </div>

        {/* Information */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

          <div className="rounded-xl bg-default-100 p-4">
            <div className="flex items-center gap-2 text-default-500">
              <BriefcaseBusiness size={18} />
              <span className="text-sm">
                Work Type
              </span>
            </div>

            <p className="font-semibold mt-2">
              {workType}
            </p>
          </div>

          <div className="rounded-xl bg-default-100 p-4">
            <div className="flex items-center gap-2 text-default-500">
              <Clock3 size={18} />
              <span className="text-sm">
                Commitment
              </span>
            </div>

            <p className="font-semibold mt-2">
              {commitment}
            </p>
          </div>

          <div className="rounded-xl bg-default-100 p-4">
            <div className="flex items-center gap-2 text-default-500">
              <CalendarDays size={18} />
              <span className="text-sm">
                Deadline
              </span>
            </div>

            <p className="font-semibold mt-2">
              {applicationDeadline}
            </p>
          </div>

        </div>

        {/* Footer */}
        <div className="flex justify-end gap-3 pt-2">

          <Button
            variant="outline"
            radius="lg"
          >
            Edit
          </Button>

          <Button
            variant="danger-soft"
            radius="lg"
          >
            Delete
          </Button>

        </div>

      </Card.Content>
    </Card>
  );
}