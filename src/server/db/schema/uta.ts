import {
  bigint,
  char,
  mysqlTable,
  time,
  varchar,
} from "drizzle-orm/mysql-core";

import { song, video } from ".";

export const uta = mysqlTable("uta", {
  id: bigint("id", { mode: "bigint" }).autoincrement().primaryKey(),
  public_id: char("public_id", { length: 16 }).unique(),
  type: varchar("type", { length: 16 }).notNull(),
  timestamp: time("timestamp"),
  song_id: bigint("song_id", { mode: "bigint" })
    .references(() => song.id)
    .notNull(),
  video_id: bigint("video_id", { mode: "bigint" })
    .references(() => video.id)
    .notNull(),
});
