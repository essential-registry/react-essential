import { z } from "zod";

/** Schemas are the source of the feature's types. Mirror your API contract here. */
export const exampleItemSchema = z.object({
  id: z.string(),
  title: z.string().min(1),
});

export type ExampleItem = z.infer<typeof exampleItemSchema>;
