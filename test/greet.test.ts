import { expect, test } from "bun:test";
import { greet } from "../src/greet.ts";

test("greet", () => {
  expect(greet("bun")).toBe("Hello, bun!");
});
