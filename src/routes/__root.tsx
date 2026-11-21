import { createRootRoute, Link, Outlet } from "@tanstack/react-router";

export const Route = createRootRoute({
  component: () => (
    <main>
      <Outlet />
    </main>
  ),
  notFoundComponent: () => (
    <div className="flex h-screen flex-col items-center justify-center gap-4">
      <h1 className="text-3xl font-medium tracking-tight">Page not found</h1>
      <Link to="/" className="underline underline-offset-4">
        Go home
      </Link>
    </div>
  ),
});
