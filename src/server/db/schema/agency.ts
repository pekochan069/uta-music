import { bigserial, char, pgTable } from "drizzle-orm/pg-core";

export const agency = pgTable("agency", {
  id: bigserial("id", { mode: "bigint" }).primaryKey(),
  public_id: char("public_id", { length: 12 }).notNull(),
});
