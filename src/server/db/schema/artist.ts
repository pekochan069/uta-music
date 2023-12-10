import { bigint, char, mysqlTable, text } from "drizzle-orm/mysql-core";

export const artist = mysqlTable("artist", {
  id: bigint("id", { mode: "bigint" }).autoincrement().primaryKey(),
  public_id: char("public_id", { length: 16 }).notNull(),
  name_jp: text("name_jp"),
  name_en: text("name_en"),
  name_kr: text("name_kr"),
  default_lang: char("default_lang", { length: 2 }).notNull(),
});
