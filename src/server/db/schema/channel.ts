import { relations } from "drizzle-orm";
import { bigint, mysqlTable, text, varchar } from "drizzle-orm/mysql-core";

import { agency, composer, singer, video, vocaloid, vtuber } from ".";

export const channel = mysqlTable("channel", {
  id: bigint("id", { mode: "bigint" }).autoincrement().primaryKey(),
  channelId: varchar("channel_id", { length: 64 }).notNull(),
  channelName: text("channel_name").notNull(),
  channelHandle: text("channel_handle").notNull(),
});

export const channelRelations = relations(channel, ({ many }) => ({
  agency: many(agency),
  vtuber: many(vtuber),
  composer: many(composer),
  vocaloid: many(vocaloid),
  singer: many(singer),
  video: many(video),
}));
