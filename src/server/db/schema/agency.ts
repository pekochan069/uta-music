import {
  bigint,
  char,
  mysqlTable,
  text,
  varchar,
} from "drizzle-orm/mysql-core";

export const agency = mysqlTable("agency", {
  id: bigint("id", { mode: "bigint" }).autoincrement().primaryKey(),
  public_id: char("public_id", { length: 16 }).unique(),
  name_jp: text("name_jp"),
  name_en: text("name_en"),
  name_ko: text("name_ko"),
  default_lang: char("default_lang", { length: 2 }).notNull(),
  x_handle: varchar("x_id", { length: 64 }),
  youtube_id: varchar("youtube_id", { length: 32 }),
  youtube_handle: text("youtube_handle"),
  website: text("website"),
});
