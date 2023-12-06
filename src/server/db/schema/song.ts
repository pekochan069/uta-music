import { bigint, char, mysqlTable, text } from "drizzle-orm/mysql-core";

import { video } from ".";

export const song = mysqlTable("song", {
  id: bigint("id", { mode: "bigint" }).autoincrement().primaryKey(),
  public_id: char("public_id", { length: 16 }).unique(),
  name_jp: text("name_jp"),
  name_en: text("name_en"),
  name_ko: text("name_ko"),
  default_lang: char("default_lang", { length: 2 }).notNull(),
  video_id: bigint("video_id", { mode: "bigint" }).references(() => video.id),
});
