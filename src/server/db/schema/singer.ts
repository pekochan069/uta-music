import { relations } from "drizzle-orm";
import { bigint, index, mysqlTable, varchar } from "drizzle-orm/mysql-core";

import { artist, channel } from ".";

export const singer = mysqlTable(
  "singer",
  {
    id: bigint("id", { mode: "bigint" }).autoincrement().primaryKey(),
    x_handle: varchar("x_handle", { length: 64 }),
    artistId: bigint("artist_id", { mode: "bigint" }).notNull(),
    channelId: bigint("channel_id", { mode: "bigint" }),
  },
  (table) => {
    return {
      artistIdx: index("artist_idx").on(table.artistId),
      channelIdx: index("channel_idx").on(table.channelId),
    };
  },
);

export const singerRelations = relations(singer, ({ one }) => ({
  artist: one(artist, {
    fields: [singer.artistId],
    references: [artist.id],
  }),
  channel: one(channel, {
    fields: [singer.channelId],
    references: [channel.id],
  }),
}));
