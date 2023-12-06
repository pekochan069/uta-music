import { bigint, mysqlTable, text, varchar } from "drizzle-orm/mysql-core";

import { artist } from ".";

export const singer = mysqlTable("singer", {
  id: bigint("id", { mode: "bigint" }).autoincrement().primaryKey(),
  x_handle: varchar("x_id", { length: 64 }),
  youtube_id: varchar("youtube_id", { length: 32 }),
  youtube_handle: text("youtube_handle"),
  artist_id: bigint("artist_id", { mode: "bigint" }).references(
    () => artist.id,
  ).notNull(),
});
