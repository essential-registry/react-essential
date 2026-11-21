import { describe, expect, it } from "vitest";

import { exampleItemSchema } from "@/features/example";

describe("exampleItemSchema", () => {
  it("accepts a valid item", () => {
    expect(exampleItemSchema.safeParse({ id: "1", title: "A" }).success).toBe(
      true
    );
  });

  it("rejects an empty title", () => {
    expect(exampleItemSchema.safeParse({ id: "1", title: "" }).success).toBe(
      false
    );
  });
});
