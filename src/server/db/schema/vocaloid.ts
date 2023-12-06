import { bigint, mysqlTable } from "drizzle-orm/mysql-core";

import { artist } from ".";

export const vocaloid = mysqlTable("vocaloid", {
  id: bigint("id", { mode: "bigint" }).autoincrement().primaryKey(),
  artist_id: bigint("artist_id", { mode: "bigint" }).references(
    () => artist.id,
  ).notNull(),
});
