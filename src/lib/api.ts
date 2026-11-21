import type { z } from "zod";

import { env } from "@/lib/env";

/** Fetch JSON from the backend and validate it with a zod schema. */
export async function apiGet<T extends z.ZodType>(
  path: string,
  schema: T,
  init?: RequestInit
): Promise<z.infer<T>> {
  const response = await fetch(`${env.VITE_API_URL}${path}`, init);
  if (!response.ok) {
    throw new Error(`Request failed: ${response.status} ${path}`);
  }
  return schema.parse(await response.json());
}
