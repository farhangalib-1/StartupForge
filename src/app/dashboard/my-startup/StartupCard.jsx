"use client";

import { deleteStartup } from "@/lib/actions/GetData";
import { Card, Button, Chip } from "@heroui/react";
import { Pencil, Trash2, Clock3 } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";


export default function StartupCard({ startup }) {
  const {
    startupName,
    industry,
    fundingStage,
    description,
    logoUrl,
    status,
  } = startup;

  const router = useRouter();
  const handleDelete = async () => {
  const result = await deleteStartup(startup._id);

  if (result.deletedCount > 0) {
    router.refresh();
  }
}
  return (
    <Card className="rounded-3xl border border-default-200 shadow-sm">
      <Card.Header className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 p-6">
        <div className="flex gap-5">
          <img
            src={logoUrl}
            alt={startupName}
            className="w-24 h-24 rounded-3xl object-cover border border-default-200"
          />

          <div>
            <Card.Title className="text-3xl font-bold">
              {startupName}
            </Card.Title>

            <Card.Description className="mt-2 text-default-500">
              Building smart solutions for a better tomorrow.
            </Card.Description>

            <div className="flex flex-wrap gap-2 mt-4">
              <Chip color="primary" variant="flat">
                {industry}
              </Chip>

              <Chip color="default" variant="flat">
                {fundingStage}
              </Chip>

              <Chip
                color={status === "approved" ? "success" : "warning"}
                variant="soft"
              >
                {status}
              </Chip>
            </div>
          </div>
        </div>

        <div className="flex gap-3">
          <Link href={`/dashboard/my-startup/${startup._id}`}>
          <Button
            variant="outline"
          >
             <Pencil size={18} />
            Edit
          </Button>
          </Link>
          <Button
          onClick={handleDelete}
            variant="danger-soft"
            
          >
            <Trash2 size={18} />
            Delete
          </Button>
        </div>
      </Card.Header>

      <Card.Content className="px-6 pb-6">
        <p className="text-default-600 leading-8 text-base">
          {description}
        </p>

        {status === "pending" && (
          <div className="mt-6 flex items-center gap-2 rounded-2xl border border-warning-300 bg-warning-50 p-4">
            <Clock3 size={18} className="text-warning" />
            <p className="text-warning-700 font-medium">
              Your startup is pending admin approval before it appears publicly.
            </p>
          </div>
        )}
      </Card.Content>

      <Card.Footer className="flex justify-between items-center border-t border-default-100 px-6 py-4">
        <span className="text-sm text-default-500">
          Created by: <span className="font-bold">{startup.email}</span> 
        </span>

        <span className="text-sm text-default-500">
          Status: <span className="font-bold">{status}</span>
        </span>
      </Card.Footer>
    </Card>
  );
}