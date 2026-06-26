"use client";

import {
  Card,
  Chip,
  Button,
  Input,
  Label,
  TextArea,
  Form,
} from "@heroui/react";

import {
  Building2,
  BriefcaseBusiness,
  CalendarDays,
  Code2,
  Send,
} from "lucide-react";

export default function OpportunityDetails({ opportunity }) {
  return (
    <main className="max-w-7xl mx-auto px-4 py-12">
      <div className="grid lg:grid-cols-5 gap-8">
        {/* Left */}
        <div className="lg:col-span-2">
          <Card className="sticky top-24 border border-default-200">
            <Card.Header className="flex flex-col items-start gap-4">
              <div>
                <Card.Title className="text-3xl">
                  {opportunity.roleTitle}
                </Card.Title>

                <Card.Description className="flex items-center gap-2 mt-2">
                  <Building2 size={16} />
                  {opportunity.startupName}
                </Card.Description>
              </div>

              <Chip color="primary">
                {opportunity.workType}
              </Chip>
            </Card.Header>

            <Card.Content className="space-y-6">
              <div className="flex items-center gap-2">
                <BriefcaseBusiness size={18} />
                {opportunity.commitment}
              </div>

              <div className="flex items-center gap-2">
                <CalendarDays size={18} />
                Apply before {opportunity.applicationDeadline}
              </div>

              <div>
                <h3 className="font-semibold flex gap-2 items-center mb-3">
                  <Code2 size={18} />
                  Required Skills
                </h3>

                <div className="flex flex-wrap gap-2">
                  {opportunity.requiredSkills.map((skill) => (
                    <Chip key={skill} size="sm" variant="bordered">
                      {skill}
                    </Chip>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-semibold mb-2">
                  About this Opportunity
                </h3>

                <p className="text-default-500">
                  {opportunity.description}
                </p>
              </div>
            </Card.Content>
          </Card>
        </div>

        {/* Right */}
        <div className="lg:col-span-3">
          <Card className="border border-default-200">
            <Card.Header>
              <Card.Title className="text-3xl">
                Apply to Opportunity
              </Card.Title>

              <Card.Description>
                Fill in your information below.
              </Card.Description>
            </Card.Header>

            <Card.Content>
              <Form className="space-y-5">
                <Input
                  name="opportunityId"
                  label="Opportunity ID"
                  value={opportunity._id}
                  readOnly
                />

                <Input
                  name="email"
                  label="Applicant Email"
                  placeholder="john@example.com"
                  type="email"
                />

                <Input
                  name="portfolio"
                  label="Portfolio Link"
                  placeholder="https://portfolio.com"
                />

                <TextArea
                  name="motivation"
                  label="Motivation Message"
                  rows={8}
                  placeholder="Explain why you're the perfect candidate..."
                />

                <Button
                  color="primary"
                  type="submit"
                  className="w-full"
                >
                  <Send size={18} />
                  Submit Application
                </Button>
              </Form>
            </Card.Content>
          </Card>
        </div>
      </div>
    </main>
  );
}