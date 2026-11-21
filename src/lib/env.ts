import { z } from "zod";

/**
 * The one place environment variables are read and validated.
 * Vite only exposes variables prefixed with VITE_ to the browser.
 */
const schema = z.object({
  VITE_SITE_NAME: z.string().default("React Essential"),
  VITE_API_URL: z.string().default("http://localhost:8000"),
});

export const env = schema.parse({
  VITE_SITE_NAME: import.meta.env.VITE_SITE_NAME,
  VITE_API_URL: import.meta.env.VITE_API_URL,
});
