import {
  bigint,
  datetime,
  mysqlTable,
  text,
  time,
} from "drizzle-orm/mysql-core";

import { channel } from "./channel";

export const video = mysqlTable("video", {
  id: bigint("id", { mode: "bigint" }).autoincrement().primaryKey(),
  video_id: varchar("video_id", { length: 20 }).notNull(),
  length: time("length"),
  release_date: datetime("release_date"),
  title: text("title").notNull(),
  channel_id: bigint("channel_id", { mode: "bigint" })
    .notNull()
    .references(() => channel.id),
});
