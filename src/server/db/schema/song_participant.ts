import { bigint, mysqlTable } from "drizzle-orm/mysql-core";

import { artist, song } from ".";

export const song_participant = mysqlTable("song_participant", {
  song_id: bigint("song_id", { mode: "bigint" }).references(() => song.id).notNull(),
  artist_id: bigint("artist_id", { mode: "bigint" }).references(() => artist.id).notNull(),
});