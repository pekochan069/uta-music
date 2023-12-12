import { relations } from "drizzle-orm";
import { bigint, index, mysqlTable, primaryKey } from "drizzle-orm/mysql-core";

import { artist, uta } from ".";

export const utaParticipants = mysqlTable(
  "uta_participants",
  {
    artistId: bigint("artist_id", { mode: "bigint" }).notNull(),
    utaId: bigint("uta_id", { mode: "bigint" }).notNull(),
  },
  (table) => {
    return {
      pk: primaryKey({ columns: [table.artistId, table.utaId] }),
      artistIdx: index("artist_idx").on(table.artistId),
      utaIdx: index("uta_idx").on(table.utaId),
    };
  },
);

export const utaParticipantsRelations = relations(
  utaParticipants,
  ({ one }) => ({
    artist: one(artist, {
      fields: [utaParticipants.artistId],
      references: [artist.id],
    }),
    uta: one(uta, {
      fields: [utaParticipants.utaId],
      references: [uta.id],
    }),
  }),
);
