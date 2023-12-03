import { bigint, bigserial, char, pgTable, time } from "drizzle-orm/pg-core";

import { song } from ".";

export const original = pgTable("original", {
  id: bigserial("id", { mode: "bigint" }).primaryKey(),
  public_id: char("public_id", { length: 12 }).notNull(),
  release_time: time("release_time").notNull(),
  song_id: bigint("song_id", { mode: "bigint" })
    .references(() => song.id)
    .notNull(),
});
