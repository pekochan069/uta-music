import { relations } from "drizzle-orm";
import { bigint, index, mysqlTable, varchar } from "drizzle-orm/mysql-core";

import { agency, artist, channel } from ".";

export const vtuber = mysqlTable(
  "vtuber",
  {
    id: bigint("id", { mode: "bigint" }).autoincrement().primaryKey(),
    xHandle: varchar("x_handle", { length: 64 }),
    artistId: bigint("artist_id", { mode: "bigint" }).notNull(),
    agencyId: bigint("agency_id", { mode: "bigint" }).notNull(),
    channelId: bigint("channel_id", { mode: "bigint" }),
  },
  (table) => {
    return {
      artistIdx: index("artist_idx").on(table.artistId),
      agencyIdx: index("agency_idx").on(table.agencyId),
      channelIdx: index("channel_idx").on(table.channelId),
    };
  },
);

export const vtuberRelations = relations(vtuber, ({ one }) => ({
  artist: one(artist, {
    fields: [vtuber.artistId],
    references: [artist.id],
  }),
  agency: one(agency, {
    fields: [vtuber.agencyId],
    references: [agency.id],
  }),
  channel: one(channel, {
    fields: [vtuber.channelId],
    references: [channel.id],
  }),
}));
