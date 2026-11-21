import { createFileRoute } from "@tanstack/react-router";
import { useHead } from "@unhead/react";

import { ThemeToggle } from "@/components/theme-toggle";
import { env } from "@/lib/env";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  useHead({ title: env.VITE_SITE_NAME });

  return (
    <div className="relative flex h-screen flex-col items-center justify-center">
      <h1 className="text-5xl font-medium tracking-tight">
        {env.VITE_SITE_NAME}
      </h1>
      <p className="my-6 max-w-xl text-center text-sm">
        An Essential template to start a React application with all the
        essentials included.
      </p>
      <ThemeToggle />
    </div>
  );
}
