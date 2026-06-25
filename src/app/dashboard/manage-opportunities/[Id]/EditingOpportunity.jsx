"use client";

import { opportunities } from "@/lib/actions/Opportunities";
import {
  Form,
  Button,
  Card,
  Input,
  Select,
  Label,
  ListBox,
  LabelRoot,
} from "@heroui/react";

import { CirclePlus } from "lucide-react";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import { updateOpportunity } from "@/lib/actions/GetData";



export default function EditingOpportunity({opportunity}) {
  const router = useRouter()
    const handleSubmit = async (e) => {
    e.preventDefault();

  const formData = new FormData(e.currentTarget);

  const data = Object.fromEntries(formData.entries());

  data.requiredSkills = data.requiredSkills
    .split(",")
    .map((skill) => skill.trim());

  const allData = {...data, status: "pending"}
        const result = await updateOpportunity(
    opportunity._id,
    allData
  );
  console.log(result)

  if (result.modifiedCount > 0) {
    router.push("/dashboard/manage-opportunities");
    router.refresh();
  }
  
};
  return (
    <> 
        <Form onSubmit={handleSubmit} className="md:w-5/12 mx-auto w-full">
  <Card className="w-full rounded-3xl border border-default-200 shadow-sm">
    <Card.Header className="flex flex-col items-start gap-2 px-8 pt-8">
      <Card.Title className="text-3xl font-bold">
        Edit Opportunity
      </Card.Title>

      <Card.Description className="text-default-500 text-base">
        Edit your opportunities 
        
      </Card.Description>
    </Card.Header>

    <Card.Content className="space-y-1 px-8 py-6">

        <Label>Role Title</Label>
      <Input
       name="roleTitle"
       defaultValue={opportunity.roleTitle}
        placeholder="e.g. Senior React Developer"
        description="comma-separated"
        variant="bordered"
        radius="lg"
        size="lg"
      />
<Label className="mt-2">Required Skills</Label>
      <Input
         name="requiredSkills"
         defaultValue={opportunity.requiredSkills.join(", ")}
        description="comma-separated"
        placeholder="e.g. React, TypeScript, Node.js"
        variant="bordered"
        radius="lg"
        size="lg"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-2">

        <Select
          name="workType"
            defaultValue={opportunity.workType}
        >
          <Label>Work Type</Label>

          <Select.Trigger>
            <Select.Value placeholder="Select type" />
            <Select.Indicator />
          </Select.Trigger>

          <Select.Popover>
            <ListBox>
              <ListBox.Item id="remote">
                <Label>Remote</Label>
              </ListBox.Item>

              <ListBox.Item id="hybrid">
                <Label>Hybrid</Label>
              </ListBox.Item>

              <ListBox.Item id="onsite">
                <Label>On-site</Label>
              </ListBox.Item>
            </ListBox>
          </Select.Popover>
        </Select>

        <Select
          name="commitment"
            defaultValue={opportunity.commitment}
        >
          <Label>Commitment Level</Label>

          <Select.Trigger>
            <Select.Value placeholder="Select level" />
            <Select.Indicator />
          </Select.Trigger>

          <Select.Popover>
            <ListBox>
              <ListBox.Item id="fulltime">
                <Label>Full Time</Label>
              </ListBox.Item>

              <ListBox.Item id="parttime">
                <Label>Part Time</Label>
              </ListBox.Item>

              <ListBox.Item id="internship">
                <Label>Internship</Label>
              </ListBox.Item>

              <ListBox.Item id="contract">
                <Label>Contract</Label>
              </ListBox.Item>
            </ListBox>
          </Select.Popover>
        </Select>

      </div>

      <Input
      defaultValue={opportunity.applicationDeadline}
      name="applicationDeadline"
        type="date"
        label="Application Deadline"
        variant="bordered"
        radius="lg"
        size="lg"
        className="mt-2"
      />

    </Card.Content>

    <Card.Footer className="px-8 pb-8">
      <Button
        type="submit"
        className="w-full h-14 rounded-xl bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600 text-white font-semibold text-lg"
      >
        <CirclePlus className="w-5 h-5" />
        Edit Opportunity
      </Button>
    </Card.Footer>
  </Card>
        </Form>
    
  
</>
  );
}