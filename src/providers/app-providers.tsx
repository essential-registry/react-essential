import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createHead, UnheadProvider } from "@unhead/react/client";
import { type ReactNode, useState } from "react";

import { ThemeProvider } from "@/providers/theme-provider";

const head = createHead();

export function AppProviders({ children }: { children: ReactNode }) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <ThemeProvider defaultTheme="system" storageKey="essential-theme">
      <UnheadProvider head={head}>
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      </UnheadProvider>
    </ThemeProvider>
  );
}
