import Link from "next/link";
import { Button } from "@heroui/react";
import { Home, SearchX } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-[80vh] flex items-center justify-center px-6">
      <div className="max-w-xl text-center">

        <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-primary/10">
          <SearchX className="h-12 w-12 text-primary" />
        </div>

        <h1 className="mt-8 text-7xl font-extrabold tracking-tight">
          404
        </h1>

        <h2 className="mt-4 text-3xl font-bold">
          Opportunity Not Found
        </h2>

        <p className="mt-4 text-default-500 text-lg leading-relaxed">
          The page you're looking for doesn't exist, may have been removed,
          or the opportunity is no longer available.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/">
          <Button

            
            color="primary"
            size="lg"
            startContent={<Home size={18} />}
          >
            Back to Home
          </Button>
          </Link>

        </div>

      </div>
    </main>
  );
}