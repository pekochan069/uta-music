import { bigserial, char, pgTable } from "drizzle-orm/pg-core";

export const VtuberTable = pgTable("vtuber", {
  id: bigserial("id", { mode: "number" }),
  public_id: char("public_id", { length: 12 }),
});
