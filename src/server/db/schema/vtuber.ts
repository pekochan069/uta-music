import { bigserial, char, pgTable, varchar } from "drizzle-orm/pg-core";

export const vtuber = pgTable("vtuber", {
  id: bigserial("id", { mode: "bigint" }).primaryKey(),
  public_id: char("public_id", { length: 12 }).notNull(),
  youtube_id: varchar("youtube_id", { length: 24 }).notNull(),
  youtube_handle: varchar("youtube_handle", { length: 32 }).notNull(),
  x_id: varchar("x_id", { length: 32 }),
});
