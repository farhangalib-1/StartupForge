import {
  Card,
  Chip,
  Button,
} from "@heroui/react";

import {
  BriefcaseBusiness,
  Building2,
  CalendarDays,
  ArrowUpRight,
} from "lucide-react";

export default function FeaturedOpportunityCard({
  opportunity,
}) {
  return (
    <Card className="group border border-default-200 hover:border-primary hover:shadow-xl transition-all duration-300">

      <Card.Header className="flex justify-between items-start gap-4">
        <div>
          <Card.Title className="text-xl font-semibold">
            {opportunity.roleTitle}
          </Card.Title>

          <Card.Description className="flex items-center gap-2 mt-2">
            <Building2 size={15} />
            {opportunity.startupName}
          </Card.Description>
        </div>

        <Chip color="primary" variant="flat">
          {opportunity.workType}
        </Chip>
      </Card.Header>

      <Card.Content className="space-y-5">

        <div>
          <h4 className="text-sm font-medium mb-2">
            Required Skills
          </h4>

          <div className="flex flex-wrap gap-2">
            {opportunity.requiredSkills.map((skill) => (
              <Chip
                key={skill}
                size="sm"
                variant="bordered"
              >
                {skill}
              </Chip>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-2 text-default-500">
          <CalendarDays size={17} />

          <span>
            Apply before {opportunity.applicationDeadline}
          </span>
        </div>
      </Card.Content>

      <Card.Footer className="flex justify-between items-center">

        <div className="flex items-center gap-2 text-default-500">
          <BriefcaseBusiness size={16} />
          {opportunity.commitment}
        </div>

        <Button
          color="primary"
          variant="light"
          endContent={<ArrowUpRight size={16} />}
        >
          View Details
        </Button>
      </Card.Footer>

    </Card>
  );
}