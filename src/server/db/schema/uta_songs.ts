import { relations } from "drizzle-orm";
import { bigint, index, mysqlTable, primaryKey } from "drizzle-orm/mysql-core";

import { song, uta } from ".";

export const utaSongs = mysqlTable(
  "uta_songs",
  {
    utaId: bigint("uta_id", { mode: "bigint" }).notNull(),
    songId: bigint("song_id", { mode: "bigint" }).notNull(),
  },
  (table) => {
    return {
      pk: primaryKey({ columns: [table.utaId, table.songId] }),
      utaIdx: index("uta_idx").on(table.utaId),
      songIdx: index("song_idx").on(table.songId),
    };
  },
);

export const utaSongsRelations = relations(utaSongs, ({ one }) => ({
  uta: one(uta, {
    fields: [utaSongs.utaId],
    references: [uta.id],
  }),
  song: one(song, {
    fields: [utaSongs.songId],
    references: [song.id],
  }),
}));
