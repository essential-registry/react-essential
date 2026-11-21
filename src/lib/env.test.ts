import { describe, expect, it } from "vitest";

import { env } from "@/lib/env";

describe("env", () => {
  it("falls back to defaults", () => {
    expect(env.VITE_SITE_NAME.length).toBeGreaterThan(0);
  });
});
