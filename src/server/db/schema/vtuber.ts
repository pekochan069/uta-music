import { bigint, mysqlTable, text, varchar } from "drizzle-orm/mysql-core";

import { agency, artist } from ".";

export const vtuber = mysqlTable("vtuber", {
  id: bigint("id", { mode: "bigint" }).autoincrement().primaryKey(),
  youtube_id: varchar("youtube_id", { length: 32 }),
  youtube_handle: text("youtube_handle"),
  x_handle: varchar("x_id", { length: 64 }),
  agency_id: bigint("agency_id", { mode: "bigint" }).references(
    () => agency.id,
  ).notNull(),
  artist_id: bigint("artist_id", { mode: "bigint" }).references(
    () => artist.id,
  ).notNull(),
});
