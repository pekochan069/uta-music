import { relations } from "drizzle-orm";
import { bigint, index, mysqlTable } from "drizzle-orm/mysql-core";

import { artist } from ".";

export const vocaloid = mysqlTable(
  "vocaloid",
  {
    id: bigint("id", { mode: "bigint" }).autoincrement().primaryKey(),
    artistId: bigint("artist_id", { mode: "bigint" }),
  },
  (table) => {
    return {
      artistIdx: index("artist_idx").on(table.artistId),
    };
  },
);

export const vocaloidRelations = relations(vocaloid, ({ one }) => ({
  artist: one(artist, {
    fields: [vocaloid.artistId],
    references: [artist.id],
  }),
}));
