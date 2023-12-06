import { bigint, mysqlTable } from "drizzle-orm/mysql-core";

import { artist, uta } from ".";

export const uta_participant = mysqlTable("uta_participant", {
  artist_id: bigint("artist_id", { mode: "bigint" }).references(() => artist.id).notNull(),
  uta_id: bigint("uta_id", { mode: "bigint" }).references(() => uta.id).notNull(),
});
