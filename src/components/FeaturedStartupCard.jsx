import {
  Card,
  Chip,
  Button,
  Avatar,
} from "@heroui/react";
import {
  Building2,
  User,
  ArrowUpRight,
} from "lucide-react";
import Image from "next/image";

export default function FeaturedStartupCard({ startup }) {
  return (
    <Card className="group border border-default-200 hover:border-primary hover:shadow-xl transition-all duration-300">
      {/* Header */}
      <Card.Header className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-3">
          <Image
            src={startup.logoUrl}
            alt={startup.startupName}
            width={60}
            height={60}
            className="bg-primary/10 text-primary rounded-full"
          />

          <div>
            <Card.Title className="text-lg font-semibold">
              {startup.startupName}
            </Card.Title>

            <Card.Description className="flex items-center gap-1 mt-1">
              <User size={14} />
              {startup.founderName}
            </Card.Description>
          </div>
        </div>

        <Chip color="primary" variant="flat">
          {startup.industry}
        </Chip>
      </Card.Header>

      {/* Content */}
      <Card.Content>
        <div className="flex items-center gap-2 text-default-600">
          <Building2 size={18} />
          <span>{startup.industry}</span>
        </div>
      </Card.Content>

      {/* Footer */}
      <Card.Footer className="flex justify-between items-center">
        <span className="text-sm text-default-500">
          Approved Startup
        </span>

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