"use client";

import { Button } from "@heroui/react";
import { AlertTriangle, Home, RotateCcw } from "lucide-react";
import Link from "next/link";

export default function Error({ error, reset }) {
  console.error(error);

  return (
    <main className="min-h-[80vh] flex items-center justify-center px-6">
      <div className="max-w-xl text-center">

        <div className="mx-auto h-24 w-24 rounded-full bg-danger/10 flex items-center justify-center">
          <AlertTriangle className="w-12 h-12 text-danger" />
        </div>

        <h1 className="mt-8 text-4xl font-bold">
          Something went wrong
        </h1>

        <p className="mt-4 text-default-500 text-lg">
          We couldn't load this page. An unexpected error occurred while
          processing your request.
        </p>

        {process.env.NODE_ENV === "development" && (
          <div className="mt-6 rounded-xl border border-danger/20 bg-danger/5 p-4 text-left">
            <p className="font-semibold text-danger mb-2">
              Error Details
            </p>

            <code className="text-sm break-all">
              {error?.message}
            </code>
          </div>
        )}

        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">

          <Button
            color="primary"
            size="lg"
            startContent={<RotateCcw size={18} />}
            onClick={() => reset()}
          >
            Try Again
          </Button>

          <Button
            as={Link}
            href="/"
            variant="bordered"
            size="lg"
            startContent={<Home size={18} />}
          >
            Go Home
          </Button>

        </div>

      </div>
    </main>
  );
}