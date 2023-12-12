import { relations } from "drizzle-orm";
import { bigint, index, mysqlTable, primaryKey } from "drizzle-orm/mysql-core";

import { artist, song } from ".";

export const songParticipants = mysqlTable(
  "song_participants",
  {
    songId: bigint("song_id", { mode: "bigint" }).notNull(),
    artistId: bigint("artist_id", { mode: "bigint" }).notNull(),
  },
  (table) => {
    return {
      pk: primaryKey({ columns: [table.songId, table.artistId] }),
      songIdx: index("song_idx").on(table.songId),
      artistIdx: index("artist_idx").on(table.artistId),
    };
  },
);

export const songParticipantsRelations = relations(
  songParticipants,
  ({ one }) => ({
    song: one(song, {
      fields: [songParticipants.songId],
      references: [song.id],
    }),
    artist: one(artist, {
      fields: [songParticipants.artistId],
      references: [artist.id],
    }),
  }),
);
