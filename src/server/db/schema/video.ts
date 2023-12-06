import {
  bigint,
  datetime,
  mysqlTable,
  text,
  time,
} from "drizzle-orm/mysql-core";

export const video = mysqlTable("video", {
  id: bigint("id", { mode: "bigint" }).autoincrement().primaryKey(),
  video_id: text("video_id"),
  platform: text("platform"),
  length: time("length"),
  release_time: datetime("release_time"),
});
