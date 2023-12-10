import { bigint, mysqlTable, varchar } from "drizzle-orm/mysql-core";

import { artist, channel } from ".";

export const composer = mysqlTable("channel", {
  id: bigint("id", { mode: "bigint" }).autoincrement().primaryKey(),
  x_handle: varchar("x_handle", { length: 64 }),
  artist_id: bigint("artist_id", { mode: "bigint" })
    .notNull()
    .references(() => artist.id),
  channel_id: bigint("channel_id", { mode: "bigint" })
    .notNull()
    .references(() => channel.id),
});
