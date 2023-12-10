import { bigint, mysqlTable, varchar } from "drizzle-orm/mysql-core";

import { agency, artist } from ".";

export const vtuber = mysqlTable("vtuber", {
  id: bigint("id", { mode: "bigint" }).autoincrement().primaryKey(),
  x_handle: varchar("x_handle", { length: 64 }),
  artist_id: bigint("artist_id", { mode: "bigint" })
    .notNull()
    .references(() => artist.id),
  agency_id: bigint("agency_id", { mode: "bigint" })
    .notNull()
    .references(() => agency.id),
  channel_id: bigint("channel_id", { mode: "bigint" })
    .notNull()
    .references(() => agency.id),
});
