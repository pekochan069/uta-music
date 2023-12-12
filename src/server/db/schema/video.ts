import { relations } from "drizzle-orm";
import {
  bigint,
  datetime,
  index,
  mysqlTable,
  text,
  time,
  varchar,
} from "drizzle-orm/mysql-core";

import { channel, uta } from ".";

export const video = mysqlTable(
  "video",
  {
    id: bigint("id", { mode: "bigint" }).autoincrement().primaryKey(),
    videoId: varchar("video_id", { length: 64 }).notNull(),
    length: time("length"),
    releaseDate: datetime("release_date"),
    title: text("title").notNull(),
    channelId: bigint("channel_id", { mode: "bigint" }).notNull(),
  },
  (table) => {
    return {
      channelIdx: index("channel_idx").on(table.channelId),
    };
  },
);

export const videoRelations = relations(video, ({ one, many }) => ({
  channel: one(channel, {
    fields: [video.channelId],
    references: [channel.id],
  }),
  uta: many(uta),
}));
